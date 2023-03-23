import React from 'react';
import { ThisDay } from './Components/ThisDay/ThisDay';
import { ThisDayInfo } from './Components/ThisDayInfo/ThisDayInfo';
import s from "./Home.module.scss";
 

/**
* @author
* @function 
**/

export const  Home= (props) => {
  return(
    <div className={s.home}>
        <ThisDay/>
        <ThisDayInfo/>
    </div>
   )

 }