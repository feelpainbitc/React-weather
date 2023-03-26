import React from 'react';
import { ThisDay } from './Components/ThisDay/ThisDay';
import { ThisDayInfo } from './Components/ThisDayInfo/ThisDayInfo';
import s from "./Home.module.scss";
import { Days } from './Days/Days';
 

/**
* @author
* @function 
**/

export const  Home= (props) => {
  return(
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay/>
        <ThisDayInfo/>
        </div>
        <Days/>
        
    </div>
   );

 }