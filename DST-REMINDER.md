# Daylight Saving Time Reminder - Larry & Steve Bot

## Vercel Cron Schedule

The daily text is triggered by Vercel's built-in cron at `25 18 * * *` (UTC) in `vercel.json`.

### DST Impact

Since the cron uses UTC, the local delivery time shifts with DST:

- **EST (Nov–Mar):** 18:25 UTC = **1:25 PM ET**
- **EDT (Mar–Nov):** 18:25 UTC = **2:25 PM ET**

### DST Schedule Changes for 2026:

**Spring Forward (March 8, 2026 at 2:00 AM)**
- Text will arrive at 2:25 PM EDT instead of 1:25 PM
- To keep 1:25 PM: change cron to `25 17 * * *` in `vercel.json`

**Fall Back (November 1, 2026 at 2:00 AM)**
- Text will arrive at 1:25 PM EST again
- If you changed the cron in spring: change back to `25 18 * * *`

### Next Action Dates:
- March 8, 2026: Update cron to `25 17 * * *` for EDT
- November 1, 2026: Update cron back to `25 18 * * *` for EST
