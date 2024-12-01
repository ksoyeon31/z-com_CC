'use client';

import style from './logoutButton.module.css';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession(); //useSession은 auth에서 제공하는 기능으로 클라이언트에서만 사용 가능

  const onLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };

  if (!me?.user) {
    return null;
  } //내 정보가 없으면 로그아웃버튼 안보여주는 로직

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
