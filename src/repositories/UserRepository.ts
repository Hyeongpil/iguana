import { LoginDto } from 'entities/dto/UserDto'
import { APIClient } from './network/APIClient'
import { UserAPI } from './network/apis/UserAPI'
import { CreateUserDto } from '../entities/dto/UserDto'
import { User } from '../entities/User'

export default class UserRepository {
  async Login(): Promise<LoginDto> {
    return await APIClient.shared.request(new UserAPI.Login())
  }

  async CreateUser(params: CreateUserDto): Promise<LoginDto> {
    return await APIClient.shared.request(new UserAPI.CreateUser(params))
  }

  async DeleteUser(): Promise<User> {
    return await APIClient.shared.request(new UserAPI.DeleteUser())
  }

  async CreateNickname(params: string): Promise<User> {
    return await APIClient.shared.request(new UserAPI.CreateNickname(params))
  }
}
