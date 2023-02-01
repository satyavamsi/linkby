CREATE INDEX ON public.accounts (id, active, created_at);
CREATE INDEX ON public.campaigns (account_id, start_date, end_date, created_at);
CREATE INDEX ON public.clicks (campaign_id, created_at);