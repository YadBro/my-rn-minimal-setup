import type { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { API_HOST } from '@env'

const baseQuery = fetchBaseQuery({
  baseUrl: API_HOST,
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
