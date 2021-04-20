import { Alarm } from '../Alarm'

export interface IAlarmState {
  isActive: boolean
  isHidden: boolean
  alarmType: AlarmType
}

export interface ICalendarCondition {
  year: number
  month: number
  dayOfMonth: number
  dayOfWeek: number[]
  hour: number
  minute: number
  second: number
}

export enum AlarmType {
  BELL = 'BELL',
  VIBRATION = 'VIBRATION',
  SILENT = 'SILENT',
}

export class MyAlarmDto extends Alarm {
  alarmState: IAlarmState
}

export class CreateAlarmDto {
  alarm: {
    title: string
    calendarCondition: ICalendarCondition
    description: string
    alarmState: IAlarmState
  }

  categoryIds: number[]
}

export class UpdateAlarmDto {
  title: string
  cronData: string
  description: string
  alarmState: IAlarmState
}