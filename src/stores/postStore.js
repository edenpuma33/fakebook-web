import axios from "axios";
import { create } from "zustand";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPost: null,
  loading: false,
  createPost: async (body, token, user) => {
    const rs = await axios.post("http://localhost:8899/post", body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    set((state) => ({
      posts: [{ ...rs.data, user, likes: [], comments: [] }, ...state.posts],
    }));
  },
}));

export default usePostStore;
