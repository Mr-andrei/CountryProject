import {CountrySearchBlock} from "./search block/SearchBlock";
import {MainBlock} from "./MainBlock/MainBlock";
import React from "react";
import style from "./mainWrapper.module.css"


export const MainWrapper = () => {

    return(
        <div className={style.main_wrapper}>
            <CountrySearchBlock/>
            <MainBlock/>
        </div>
    )
}