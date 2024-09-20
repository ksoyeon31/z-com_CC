"use client";

import style from './LogOutButton.module.css';

export default function LogOutButton(){
    const me = {
        id: 'ksoyeon31',
        image: '/5Udwvqim.jpg',
        nickname: '쏘여니'
    }

    const onLogout = () =>{

    }


    return(
        <button className={style.logOutButton} onClick={onLogout}>
            <div className = {style.logOutUserImage}>
                <img src = {me.image} alt={me.id}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
}