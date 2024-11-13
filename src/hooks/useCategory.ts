import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((category) => {
      const caetgoryWithAll = [
        {
          id: null,
          name: "전체"
        }
        , ...category
      ]

      setCategory(caetgoryWithAll);
    })
  }, []);

  return category;
}