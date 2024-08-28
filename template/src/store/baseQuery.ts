import type { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
})

const reduxBaseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  try {
    const result = await baseQuery(args, api, extraOptions)

    return result
  } catch (error) {
    // Handle any unexpected errors
    console.error('Unexpected Error Query:', error)
    throw error
  }
}


export default reduxBaseQuery
