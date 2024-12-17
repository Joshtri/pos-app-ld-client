// formatDate.ts
export const formatDate = (date: Date | string): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(parsedDate);
};
