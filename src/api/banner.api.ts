import { Banner } from "@/models/banner.model";
import { requestHandler } from "./http"

export const fetchBanners = () => {
  return requestHandler<Banner[]>("get", "/banners");
}