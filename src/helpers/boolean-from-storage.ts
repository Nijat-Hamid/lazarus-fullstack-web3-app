const getBooleanFromLocalStorage = (key: string, defaultValue: boolean): boolean => {
  const value = localStorage.getItem(key);
  if(value === null) return defaultValue;
  if(value === "true" || value === "false") return !!JSON.parse(value);
  return defaultValue
};
export default getBooleanFromLocalStorage