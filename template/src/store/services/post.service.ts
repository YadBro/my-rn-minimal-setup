import { createApi } from '@reduxjs/toolkit/query/react';
import reduxBaseQuery from '@store/baseQuery';
import type { Posts } from 'src/types/Post';
import type { Post } from '@interfaces/Post';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: reduxBaseQuery,
  tagTypes: ['Post', 'Posts'],
  endpoints: (build) => ({
    getPosts: build.query<Posts, string>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    addPost: build.mutation<Post, Omit<Post, 'id'>>({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
        invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    }),
  }),
});


export const {
  useGetPostsQuery,
  useAddPostMutation,
} = postApi
