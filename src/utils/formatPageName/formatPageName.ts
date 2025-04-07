const formatPageName = (pageKey: string): string => {
  return pageKey
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());
};

export default formatPageName;
