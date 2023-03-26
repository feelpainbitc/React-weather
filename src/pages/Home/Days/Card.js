import React from 'react';
import s from "./Days.module.scss";
import { GlobalSvgSelector } from "/home/feelpainbitc/weaherlooking/src/assets/icons/global/GlobalSvgSelector.js";

/**
* @author
* @function Card
**/

export const Card = ({day}) => {
    const {day_name,day_info,icon_id,temp_day,temp_night,info}=day;
  return(
    <div className={s.card}>
        <div className={s.day}>{day_name}</div>
        <div className={s.day_info}>{day_info}</div>
        <div className={s.img}>
            <GlobalSvgSelector id={icon_id}/>
        </div>
        <div className={s.temp_day}>{temp_day}</div>
        <div className={s.temp_night}>{temp_night}</div>
        <div className={s.info}>{info}</div>
    </div>
   )

 }