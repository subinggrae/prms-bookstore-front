export interface Book {
  id: number;
  title: string;
  image: string;
  category_id: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
}

export interface BookDetail extends Book {
  liked: boolean;
  categoryName: string;
}