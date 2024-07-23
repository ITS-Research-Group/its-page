export interface DataItem<T> {
  id: number;
  attributes: T;
}

interface Pagination {
  start: number;
  limit: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

export interface ResponseList<T> {
  data: DataItem<T>[];
  meta: Meta;
}
