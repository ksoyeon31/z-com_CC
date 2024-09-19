import LoginModal from '@/app/(beforeLogin)/_component/LoginModal';

// (.)i 는 인터셉팅 라우터로 현재폴더((.))의 i를 가로챈다는 뜻 >> before login page 로 가보셈
import {useState} from "react";

export default function Page() {
 
  return(
    <LoginModal />
  );
}