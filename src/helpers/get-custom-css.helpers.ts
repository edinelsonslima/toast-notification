export function getStyle(value?: string | object) {
  if (!value || typeof value !== "object") return;
  return value;
}

export function getClassName(value?: string | object) {
  if (!value || typeof value !== "string") return "";
  return value;
}
