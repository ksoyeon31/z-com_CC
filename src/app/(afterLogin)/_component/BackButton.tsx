"use client"

import style from "@/app/(afterLogin)/[username]/profile.module.css";

export default function BackButton() {
  return (
    <button className={style.backButton} type='button'>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03" >
        <g>
          <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
        </g>
      </svg>
    </button>
  )
}