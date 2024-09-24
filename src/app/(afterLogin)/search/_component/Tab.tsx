"use client";

import style from '../search.module.css';
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
//Home_Tab과는 달리 버튼 클릭하면 주소창이 달라짐



export default function Tab() {
  const [current, setCurrent] = useState('hot');
  const router = useRouter();
  const searchParams = useSearchParams();
    // useSearchParams 훅의 사용법은 searchParams.q가 아니라 .get('q') 로 작성해야함

  const onClickHot = () => {
    setCurrent('hot');
    router.replace(`/search?q=${searchParams.get('q')}`)
  }
  const onClickNew = () => {
    setCurrent('new');
    router.replace(`/search?${searchParams.toString()}&f=live`)
    // searchParams.toString()이 뜻은 현재 searchParams의 내용을 다 쓰라는 의미임
    // 위 코드의 내용은 기존의 searchParams 내용을 다 쓰고 f=live 를 추가해라 라고 해석할 수 있음
  }

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === 'new'}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === 'hot'}></div>
        </div>
      </div>
    </div>
  );
}