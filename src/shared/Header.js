import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector';
import { storage } from '../localStorage/Storage';
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

    const[theme,setTheme]=useState(storage.getItem('theme') || 'light');

 const colorStyles={
    control:(styles)=>({
        ...styles,
        backgroundColor:theme==='dark' ? '#4F4F4F' : 'rgba(71,147,255,0.2)',
        width:'194px',
        height:'37px',
        border:'none',
        borderRadius:'10px'
        }),
        singleValue:(styles)=>({
            ...styles,
            color:theme==='dark' ? '#fff' : '#000',
            }),
 };




 function changeTheme(){
    setTheme(theme === 'light' ? 'dark' : 'light');
    storage.setItem('theme',theme);
 }

 useEffect(()=>{
    const root=document.querySelector(':root');

    const components=[
    'body-background',
    'components-background',
    'card-background',
    'card-shadow',
    'text-color'
    ];



    components.forEach(component=>{
        root.style.setProperty(`--${component}-default`,
        `var(--${component}-${theme})`
        )
    })

    },[theme]);



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
            <div className={s.change_theme} onClick={changeTheme}>
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