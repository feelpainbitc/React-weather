import React from 'react'  ;
import s from "./Popup.module.scss";
import { ThisDayItem } from '../../pages/Home/Components/ThisDayInfo/ThisDayItem';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

/**
* @author
* @function Popup
**/

export const Popup = (props) => {
    const items=[
        {
          icon_id:'temp',
          name:'Tempreture',
          value:'20° - feels like 17°',
        },
        {
          icon_id:'pressure',
          name:'Pressure',
          value:'756 mmHg',
        },
        {
          icon_id:'precipitation',
          name:'Precipitation',
          value:'No precipitation',
        },
        {
          icon_id:'wind',
          name:'Wind',
          value:'3 m/s south-west - light wind',
        },
      ];
  return(
    <>
    <div className={s.blur}></div>
    <div className={s.popup}>
        <div className={s.day}>
            <div className={s.day_temp}>20°</div>
            <div className={s.day_name}>Среда</div>
            <div className={s.day_img}>
                <GlobalSvgSelector id="sun"/>
            </div>
            <div className={s.day_time}>Время:<span>21:54</span></div>
            <div className={s.day_town}>Grodno</div>
        </div>
        <div className={s.this_day_info_items}>{
        items.map((item)=>
          <ThisDayItem  key={item.icon_id} item={item}/>
        )}
        </div>
        <div className={s.close}>
            <GlobalSvgSelector id="close"></GlobalSvgSelector>
        </div>
    </div>
    </>
   )

 }