import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import s from "./ThisDay.module.scss";


/**
* @author
* @function 
**/



export const  ThisDay= (props) => {

  return(
    <div className={s.this_day}>
        <div className={s.top_block}>
            <div className={s.top_block_wrapper}>
            <div className={s.this_temp}>20°</div>
            <div className={s.this_day_day}>Сегодня</div>  
            </div>  
            <GlobalSvgSelector id="sun"/>
        </div>
        <div className={s.bottom_block}>
            <div className={s.this_time}>Время:<span>21:54</span></div>
            <div className={s.this_town}>Grodno</div>
        </div>
    </div>
   )

 }