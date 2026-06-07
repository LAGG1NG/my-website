export function formatDate(date: string) {
  if (!date) {
    return "未注明日期";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
