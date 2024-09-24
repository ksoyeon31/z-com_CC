'use client'
import { useState } from 'react'
import style from './ProfileTab.module.css'


export default function ProfilTab(){

    const onClickPost=()=>{}
    const onClickAnswer=()=>{}
    const onClickHighlight=()=>{}
    const onClickMedia=()=>{}
    const onClickLike=()=>{}

    const [tab, setTab] = useState('post')
    return(
       
            <div className={style.ProfileTab}>
                <div onClick={onClickPost}>
                    게시물
                    <div className={style.tabIndicator} hidden={tab!='post'}></div>
                </div>
                <div onClick={onClickAnswer}>
                    답글
                    <div className={style.tabIndicator} hidden={tab!='ans'}></div>
                </div>
                <div onClick={onClickHighlight}>
                    하이라이트
                    <div className={style.tabIndicator} hidden={tab!='high'}></div>
                </div>
                <div onClick={onClickMedia}>
                    미디어
                    <div className={style.tabIndicator} hidden={tab!='med'}></div>
                </div>
                <div onClick={onClickLike}>
                    마음에 들어요
                    <div className={style.tabIndicator} hidden={tab!='like'}></div>
                </div>
            </div>
    );
}