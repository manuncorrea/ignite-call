import { Calendar } from '@/src/components/Calender'
import dayjs from 'dayjs'
import { useState } from 'react'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const [selecteDate, setSelecteDate] = useState<Date | null>(null)

  const isDateSelected = !!selecteDate

  const weekDay = selecteDate ? dayjs(selecteDate).format('dddd') : null

  const describedDate = selecteDate
    ? dayjs(selecteDate).format('DD[ de ]MMMM')
    : null

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selecteDate} onDateSelected={setSelecteDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>08:00h</TimePickerItem>
            <TimePickerItem>09:00h</TimePickerItem>
            <TimePickerItem>10:00h</TimePickerItem>
            <TimePickerItem>11:00h</TimePickerItem>
            <TimePickerItem>12:00h</TimePickerItem>
            <TimePickerItem>13:00h</TimePickerItem>
            <TimePickerItem>14:00h</TimePickerItem>
            <TimePickerItem>15:00h</TimePickerItem>
            <TimePickerItem>16:00h</TimePickerItem>
            <TimePickerItem>17:00h</TimePickerItem>
            <TimePickerItem>18:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
