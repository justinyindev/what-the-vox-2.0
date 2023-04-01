import { IArticleResponseData } from "@/app/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArticleSlice {
    articles: IArticleResponseData[]
}

const initialState: IArticleSlice = {
    articles: []
}

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action : PayloadAction<IArticleResponseData[]>) => {
      state.articles = action.payload;
    },
    appendArticles: (state, action : PayloadAction<IArticleResponseData[]>) => {
      const newArticles = action.payload.filter((article : IArticleResponseData) => {
        return !state.articles.some((h) => h.title === article.title);
      });
      state.articles = [...state.articles, ...newArticles];
    },
  },
});

export const { setArticles, appendArticles } = articleSlice.actions;

export default articleSlice.reducer;
