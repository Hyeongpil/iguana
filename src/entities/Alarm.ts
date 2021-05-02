import { User } from './User'
export class Alarm {
  id: number
  title: string
  cronData: string
  description: string
  shareUrl: string
  imageUrl: string
  scrapCnt: number
  likeCnt: number
  user: User
  categories: ICategories[]
}

export interface ICategories {
  id: number
  name: string
}
