export type LiveStats = {
  approvedDeals: number;
  venuesCovered: number;
  dealsExtracted: number;
  pipelineRuns: number;
  failedRuns: number;
  avgConfidence: number;
  venuesTracked: number;
  live: boolean;
  fetchedAt: string | null;
};

// Last-known-good production numbers (20 Jul 2026). Served whenever the
// live fetch is unavailable so the page never breaks or blocks a build.
const FALLBACK: LiveStats = {
  approvedDeals: 582,
  venuesCovered: 124,
  dealsExtracted: 661,
  pipelineRuns: 221,
  failedRuns: 0,
  avgConfidence: 0.93,
  venuesTracked: 507,
  live: false,
  fetchedAt: null,
};

const num = (v: unknown): number | null =>
  typeof v === "number" && Number.isFinite(v) ? v : null;

/**
 * Read-only aggregate stats from the Pub Thursdays production database,
 * via a SECURITY DEFINER Postgres function that exposes counts only.
 * Revalidated every 6 hours; the key is the public publishable key.
 */
export async function getLiveStats(): Promise<LiveStats> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return FALLBACK;

  try {
    const res = await fetch(`${url}/rest/v1/rpc/portfolio_stats`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      next: { revalidate: 21600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return FALLBACK;
    const d: unknown = await res.json();
    if (typeof d !== "object" || d === null) return FALLBACK;
    const r = d as Record<string, unknown>;

    const approvedDeals = num(r.approved_deals);
    const venuesCovered = num(r.venues_covered);
    const dealsExtracted = num(r.deals_extracted);
    const pipelineRuns = num(r.pipeline_runs);
    const failedRuns = num(r.failed_runs);
    const avgConfidence = num(r.avg_confidence);
    const venuesTracked = num(r.venues_tracked);
    if (
      approvedDeals === null ||
      venuesCovered === null ||
      dealsExtracted === null ||
      pipelineRuns === null ||
      failedRuns === null ||
      avgConfidence === null ||
      venuesTracked === null
    ) {
      return FALLBACK;
    }

    return {
      approvedDeals,
      venuesCovered,
      dealsExtracted,
      pipelineRuns,
      failedRuns,
      avgConfidence,
      venuesTracked,
      live: true,
      fetchedAt:
        typeof r.generated_at === "string"
          ? r.generated_at
          : new Date().toISOString(),
    };
  } catch {
    return FALLBACK;
  }
}
