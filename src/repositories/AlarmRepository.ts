import { Alarm } from 'entities/Alarm'
import { APIClient } from './network/APIClient'
import { AlarmAPI } from './network/apis/AlarmAPI'
import { ICategories } from 'entities/Alarm'
import {
  MyAlarmDto,
  CreateAlarmDto,
  UpdateAlarmDto,
} from 'entities/dto/AlarmDto'
export default class AlarmRepository {
  async FetchAlarms(): Promise<Alarm[]> {
    return await APIClient.shared.request(new AlarmAPI.FetchAlarms())
  }

  async FetchPopular(): Promise<Alarm[]> {
    return await APIClient.shared.request(new AlarmAPI.FetchPopular())
  }

  async FetchMyAlarms(): Promise<MyAlarmDto[]> {
    return await APIClient.shared.request(new AlarmAPI.FetchMyAlarms())
  }

  async FetchAlarm(alarmId: number): Promise<Alarm> {
    return await APIClient.shared.request(new AlarmAPI.FetchAlarm(alarmId))
  }

  async CreateAlarms(params: CreateAlarmDto): Promise<MyAlarmDto> {
    return await APIClient.shared.request(new AlarmAPI.CreateAlarms(params))
  }

  async UpdateAlarms(params: UpdateAlarmDto, alarmId: number): Promise<Alarm> {
    return await APIClient.shared.request(
      new AlarmAPI.UpdateAlarms(params, alarmId),
    )
  }

  async FetchCategory(): Promise<ICategories[]> {
    return await APIClient.shared.request(new AlarmAPI.FetchCategory())
  }
}
