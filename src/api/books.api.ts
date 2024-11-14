import { Book } from "../models/book.model";
import { IPagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: IPagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  const response = await httpClient<FetchBooksResponse>("/books", { params: params });
  return response.data;
};
