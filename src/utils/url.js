export const urlToSearchQuery = (url) => {
  const urlObj = new URL(url);
  const searchParams = urlObj.search;
  return searchParams;
};

export const searchQueryToQueryString = (searchQuery) => {
  const queryString = new URLSearchParams(searchQuery).toString();
  return queryString;
};
