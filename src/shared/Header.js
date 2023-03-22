import React from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector';
import s from "./Header.module.scss";


/**
* @author
* @function 
**/

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export const  Header= (props) => {

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
            <Select options={options} />
        </div>
    </div>
   )

 }