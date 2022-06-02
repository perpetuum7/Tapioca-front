export const getQuery = (search: string, query: string) => {
  const queries = new URLSearchParams(search);
  return queries.get(query);
};
