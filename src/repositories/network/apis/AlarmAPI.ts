import { AxiosResponse } from 'axios'
import { APIRequest } from 'repositories/network/APIRequest'
import { HTTPMethod } from 'repositories/network/APIClient'
import { Alarm } from 'entities/Alarm'
import { MyAlarmDto, CreateAlarmDto } from 'entities/dto/AlarmDto'
import { UpdateAlarmDto } from 'entities/dto/AlarmDto'
import { ICategories } from 'entities/Alarm'

export namespace AlarmAPI {
  const ALARMS = 'alarms'

  export class FetchAlarms implements APIRequest<Alarm[]> {
    response: Alarm[]
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor() {
      this.path = `${ALARMS}`
    }
  }

  export class FetchPopular implements APIRequest<Alarm[]> {
    response: Alarm[]
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor() {
      this.path = `${ALARMS}/popular`
    }
  }

  export class FetchMyAlarms implements APIRequest<MyAlarmDto[]> {
    response: MyAlarmDto[]
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor() {
      this.path = `${ALARMS}/my`
    }
  }

  export class FetchAlarm implements APIRequest<Alarm> {
    response: Alarm
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor(alarmId: number) {
      this.path = `${ALARMS}/${alarmId}`
    }
  }

  export class CreateAlarms implements APIRequest<MyAlarmDto> {
    response: MyAlarmDto
    path: string
    method = HTTPMethod.POST
    parse = (data: AxiosResponse) => data.data
    constructor(params: CreateAlarmDto) {
      this.path = `${ALARMS}`
    }
  }

  export class UpdateAlarms implements APIRequest<Alarm> {
    response: Alarm
    path: string
    method = HTTPMethod.PUT
    parse = (data: AxiosResponse) => data.data
    constructor(params: UpdateAlarmDto, alarmId: number) {
      this.path = `${ALARMS}/${alarmId}`
    }
  }

  export class FetchCategory implements APIRequest<ICategories[]> {
    response: ICategories[]
    path: string
    method = HTTPMethod.GET
    parse = (data: AxiosResponse) => data.data
    constructor() {
      this.path = `category`
    }
  }
}
