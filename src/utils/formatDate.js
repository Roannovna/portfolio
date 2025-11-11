export const formatDate = new Intl.DateTimeFormat("ru", {
  weekday: "short",
  day: "numeric",
  month: "short",
});

export const formatDateMonth = new Intl.DateTimeFormat("ru", {
  month: "long",
});
