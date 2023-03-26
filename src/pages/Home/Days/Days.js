import React from 'react';
import s from "./Days.module.scss";
import { Card } from './Card';
import { Tabs } from './Tabs';

/**
* @author
* @function Days
**/

export const Days = (props) => {
    const days=[
        {
            day_name: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day_name: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь и солнце',
          },
          {
            day_name: 'Ср',
            day_info: '30 авг',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'небольшой дождь',
          },
          {
            day_name: 'Чт',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day_name: 'Пт',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day_name: 'Сб',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
          {
            day_name: 'Вс',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
          },
    ];

  return(
    <>
        <Tabs/>
    <div className={s.days}>{
        days.map((day)=>(
          <Card key={day.icon_id} day={day}/>  
        ))}
        </div>

    </>
   )

 }