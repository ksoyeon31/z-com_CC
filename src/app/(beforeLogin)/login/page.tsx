// // import {redirect} from "next/navigation";

// // export default function Login(){
// //     redirect('/i/flow/login');
// // } >> 이건 서버에서 리다이렉트 하는 거라 인터셉트 라우팅이 제대로 동작되지 않음
// //따라서 클라이언트에서 링크를 통해 리다이렉트 해줘야 함

// 'use client';

// import { useRouter } from 'next/navigation';
// import Main from '@/app/(beforeLogin)/_component/Main';
// import { useSession } from 'next-auth/react';

// export default function Login() {
//   const router = useRouter();
//   const { data: session } = useSession();

//   if (session?.user) {
//     router.replace('/home');
//     return null;
//   }
//   router.replace('/i/flow/login');
//   // return null;  /login에서 /i/flow/login 으로 가는 것이기 때문에 뒷배경이 안나옴 따라서 return에서 페이지 창을 똑같이 만들어줘야 함
//   return <Main />;
// }

// // localhost:3000 > localhost:3000/login > localhost:3000/i/flow/login

// // router.push를 사용했을 때 뒤로가기 실행시
// // localhost:3000/i/flow/login > localhost:3000/login (근데 localhost:3000/login은 자동으로 i/flow/login으로 리다이렉트 되므로 무한굴레 빠짐)

// // router.replace를 사용했을 때 뒤로가기 실행시
// // localhost:3000/i/flow/login > localhost:3000 push의 단점(무한굴레)을 해결할 수 있음
'use client';

import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';
import { useSession } from 'next-auth/react';

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace('/home');
    return null;
  }

  router.replace('/i/flow/login');
  return <Main />;
}
