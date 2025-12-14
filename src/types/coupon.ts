export type CouponData = {
  title: string
  is_enabled: number
  percent: number
  due_date: number
  code: string
  id: string
}

export type Pagination = {
  total_pages: number
  current_page: number
  has_pre: boolean
  has_next: boolean
  category: string
}

export type CreateCouponParams = {
  title: string
  is_enabled: number
  percent: number
  due_date: number
  code: string
}

export type EditCouponParams = {
  id: string
  data: CouponData
}

type MessageResponse = {
  success: boolean
  message: string
}
export type CreateCouponResponse = MessageResponse
export type DeleteCouponResponse = MessageResponse
export type EditCouponResponse = MessageResponse

export type GetCouponsResponse = {
  success: boolean
  coupons: CouponData[]
  pagination: Pagination
  message: unknown[]
}
