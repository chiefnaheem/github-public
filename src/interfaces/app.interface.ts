export interface Repository {
  name: string;
  author: string;
  stars: number;
  watchers: number;
  forks: number;
  description: string;
  lastUpdate: string;
}

export interface Pagination {
  currentPage: number;
  resultsPerPage: number;
  totalPages: number;
}