import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});
// categor
// 12987f3b42993c983f1fe16aed90a0225e6930db7c00158db3b5f5d4fee572a7811d8c16854be7e09b5f9412417417772f58e80f358a7125a88387b1a5aca9e9f8ad75b385398c1933e72d372586288386f41e89888de574fe6b3c70a166246cba3882b956e9e7528b8f0799e348cf99f5532788ce918b38cd0b8c163399b04d
export const fetchCategories = async () => api.get("/api/categories");
