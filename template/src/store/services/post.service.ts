import { createApi } from '@reduxjs/toolkit/query/react';
import reduxBaseQuery from '@store/baseQuery';
import type { Posts } from 'src/types/Post';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: reduxBaseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query<Posts, string>({
      query: () => 'posts',
    }),
  }),
});


export const {
  useGetPostsQuery,
} = postApi
