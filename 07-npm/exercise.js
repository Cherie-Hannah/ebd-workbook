// 07-npm — your work goes in this file, and in package.json.
// Check your work with: npm test 07

import dayjs from "dayjs";

// formatDate("2026-03-15") -> "15/03/2026"
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

// yearOf("2026-03-15") -> 2026
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

// addDays("2026-03-15", 14) -> "2026-03-29"
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

// The package chosen from npmjs.com (step 5)
export const myPackage = "lodash";