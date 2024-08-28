import { createApi } from '@reduxjs/toolkit/query/react';
import reduxBaseQuery from '@store/baseQuery';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: reduxBaseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query<Array<{
      id: string,
      name: string,
    }>, string>({
      query: (name: string) => `posts/${name}`,
    }),
  }),
});


export const {
  useGetPostsQuery,
} = postApi
