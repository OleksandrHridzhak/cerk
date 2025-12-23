/**
 * Parse a date string like "23 August 2025" or "3 December 2025" to ISO 8601 date format (YYYY-MM-DD)
 */
export function parseToISODate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return dateStr;
  }
  return date.toISOString().split('T')[0];
}

/**
 * Parse a date string to full ISO 8601 datetime format
 */
export function parseToISODateTime(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return dateStr;
  }
  return date.toISOString();
}
