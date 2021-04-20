import { String } from 'lodash'
import { User } from '../User'

export class LoginDto {
  user: User
  accessToken: String
}

export class CreateUserDto {
  sub: string
  email: string
  nickname: string
  platformType: string
}
