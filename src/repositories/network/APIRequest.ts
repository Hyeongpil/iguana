/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTPMethod } from './APIClient'
// import { IApiResponse } from "@/repositories/network/APIResponse"

export type APIRequest<R> = {
  response: R
  path: string
  method: HTTPMethod
  params?: any
  baseURL?: string
  type?: string
  parse?: (data: any) => R
}
