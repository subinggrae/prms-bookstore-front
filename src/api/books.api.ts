import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient, requestHandler } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  const response = await httpClient<FetchBooksResponse>("/books", { params: params });
  return response.data;
};

export const fetchBook = async (bookId: string) => {
  const response = await httpClient.get(`/books/${bookId}`);
  return response.data;
}

export const likeBook = async (bookId: number) => {
  const response = await httpClient.post(`/likes/${bookId}`);
  return response.data;
}

export const unlikeBook = async (bookId: number) => {
  const response = await httpClient.delete(`/likes/${bookId}`);
  return response.data;
}

export const fetchBestBooks = async () => {
  return requestHandler("get", "/books/best");
}