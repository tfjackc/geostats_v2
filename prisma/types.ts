export default interface Movement {
    country: string | null;
    agg_day_period: bigint | null;
    agg_time_period: bigint | null;
    month: string | null;
    geography: bigint | null;
    activity_index_total: number | null;
    xlat: number | null;
    xlon: number | null;
    data_version: string | null;
    geo_aggregation: string | null;
    daily_aggregation: string | null;
    hourly_aggregation: bigint | null;
    geom: any | null;
    id: number;
}
