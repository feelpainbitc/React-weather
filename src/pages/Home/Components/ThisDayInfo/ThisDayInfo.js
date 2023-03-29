import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from "./ThisDayInfo.module.scss";
import { ThisDayItem } from './ThisDayItem';
import cloud from "/home/feelpainbitc/weaherlooking/src/assets/images/image11.png";

/**
* @author
* @function 
**/




export const  ThisDayInfo= (props) => {
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
    <div className={s.this_day_info}>
      <div className={s.this_day_info_items}>{
        items.map((item)=>(
          <ThisDayItem  key={item.icon_id} item={item}/>
        ))
      }</div>
      <img className={s.cloud_img} src={cloud} alt="Cloud"></img>
    </div>
   )

 }