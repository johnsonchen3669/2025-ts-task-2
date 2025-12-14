import type {
  CreateCouponParams,
  CreateCouponResponse,
  DeleteCouponResponse,
  EditCouponParams,
  EditCouponResponse,
  GetCouponsResponse,
} from '@/types/coupon'
import axios from 'axios'
import type { AxiosResponse } from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_PATH = import.meta.env.VITE_API_PATH

const couponsApi = axios.create({
  baseURL: BASE_URL,
})

couponsApi.interceptors.request.use(
  (request) => {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')

    if (token) {
      request.headers['Authorization'] = token
    }

    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

couponsApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)

export const apiCreateCoupon = (
  params: CreateCouponParams,
): Promise<AxiosResponse<CreateCouponResponse>> =>
  couponsApi.post(`/v2/api/${API_PATH}/admin/coupon`, { data: params })
  
export const apiEditCoupon = (
  params: EditCouponParams,
): Promise<AxiosResponse<EditCouponResponse>> => {
  const { data, id } = params
  return couponsApi.put(`/v2/api/${API_PATH}/admin/coupon/${id}`, { data })
}

export const apiDeleteCoupon = (couponId: string): Promise<AxiosResponse<DeleteCouponResponse>> =>
  couponsApi.delete(`/v2/api/${API_PATH}/admin/coupon/${couponId}`)

export const apiGetCoupons = (params: {
  page?: string
}): Promise<AxiosResponse<GetCouponsResponse>> =>
  couponsApi.get(`/v2/api/${API_PATH}/admin/coupons`, { params })
