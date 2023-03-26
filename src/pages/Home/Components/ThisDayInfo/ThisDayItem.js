import React from 'react'
import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvfSelector';

/**
* @author
* @function 
**/

export const ThisDayItem= ({item}) => {
  const {icon_id,name,value}=item;
  return(
    <div className={s.this_day_item}>
        <div className={s.indicator}>
            <IndicatorSvgSelector id={icon_id}/>
        </div>
        <div className={s.indicator_name}>{name}</div>
        <div className={s.indicator_value}>{value}</div>
    </div>
   )

 }