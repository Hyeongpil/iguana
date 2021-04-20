import { AxiosResponse } from 'axios'
import { APIRequest } from 'repositories/network/APIRequest'
import { HTTPMethod } from 'repositories/network/APIClient'
import { LoginDto } from 'entities/dto/UserDto'
import { CreateUserDto } from 'entities/dto/UserDto'
import { User } from 'entities/User'

export namespace UserAPI {
  const USER = 'user'

  export class Login implements APIRequest<LoginDto> {
    response: LoginDto
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor() {
      this.path = `${USER}`
    }
  }

  export class CreateUser implements APIRequest<LoginDto> {
    response: LoginDto
    path: string
    method = HTTPMethod.POST
    parse = (data: AxiosResponse) => data.data
    constructor(params: CreateUserDto) {
      this.path = `${USER}`
    }
  }

  export class DeleteUser implements APIRequest<User> {
    response: User
    path: string
    method = HTTPMethod.DELETE
    parse = (data: AxiosResponse) => data.data
    constructor() {
      this.path = `${USER}`
    }
  }
}
