import React from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector';
import s from "./Header.module.scss";


/**
* @author
* @function 
**/

const options = [
    { value: 'city1', label: 'Molodechno' },
    { value: 'city2', label: 'Moscow' },
    { value: 'city3', label: 'Grodno' }
  ]

export const  Header= (props) => {

 const colorStyles={
    control:(styles)=>({
        ...styles,
        backgroundColor:0 ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
        width:'194px',
        height:'37px',
        border:'none',
        borderRadius:'10px'
        }),
        singleValue:(styles)=>({
            ...styles,
            color:0 ? '#fff' : '#000',
            }),
 }

  return(
    <div className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo}>
                <GlobalSvgSelector id="header-logo"/>
            </div>
            <div className={s.title}>
                React Weather
            </div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme}>
            <GlobalSvgSelector id="change-theme"/>
            </div>
            <Select
             defaultValue={options[2]}
             styles={colorStyles}
             options={options}/>
        </div>
    </div>
   )

 }