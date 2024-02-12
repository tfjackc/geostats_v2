-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis" WITH VERSION "3.3.4";

-- CreateTable
CREATE TABLE "movement" (
    "country" TEXT,
    "agg_day_period" BIGINT,
    "agg_time_period" BIGINT,
    "month" TEXT,
    "geography" BIGINT,
    "activity_index_total" DOUBLE PRECISION,
    "xlat" DOUBLE PRECISION,
    "xlon" DOUBLE PRECISION,
    "data_version" TEXT,
    "geo_aggregation" TEXT,
    "daily_aggregation" TEXT,
    "hourly_aggregation" BIGINT,
    "geom" geometry,
    "id" SERIAL NOT NULL,

    CONSTRAINT "movement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "movement_geom_idx" ON "movement" USING GIST ("geom");

