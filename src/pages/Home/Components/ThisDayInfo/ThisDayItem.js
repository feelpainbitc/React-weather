import React from 'react'
import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvfSelector';

/**
* @author
* @function 
**/

export const ThisDayItem= ({item}) => {

  return(
    <div className={s.item}>
        <div className={s.indicator}>
            <IndicatorSvgSelector id={item.icon_id}/>
        </div>
        <div className={s.indicator_name}>{item.name}</div>
        <div className={s.indicator_value}>{item.value}</div>
    </div>
   )

 }