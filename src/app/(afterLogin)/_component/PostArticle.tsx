"use client";

import {ReactNode} from "react";
import style from './post.module.css';
import {useRouter} from "next/navigation";

type Props = {
  children: ReactNode,
  post: {
    postId: number;
    content: string,
    User: {
      id: string,
      nickname: string,
      image: string,
    },
    createAt: Date,
    Images: any[],
  }
}

export default function PostArticle({ children, post}: Props) {{/* 부모컴포넌트(postarticle)이 클라이언트 컴포넌트이고 자식 컴포넌트(밑에코드)가 서버컴포넌트일 때
    부모컴포넌트에서 서버컴포넌트를 children 또는 props으로 받아와서 사용하면 가능함
    서버컴포넌트를 import해서 사용하는 건 안됨 > import하면 서버컴포넌트가 클라이언트 컴포넌트로 성격이 바뀜
    따라서 서버컴포넌트가 클라이언트 컴포넌트의 자식일 때 children이나 props로 값을 넘겨서 사용함 */}
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  }

  return (
    <article onClickCapture={onClick} className={style.post}>
        {/* 클릭 이벤트와 a태그가 겹칠 때 이벤트 캡처링을 활용하면 좋음 
         이벤트 버블링이라는 것은 자식에서 부모 요소로 이벤트가 전파되는 방식을 말하고
         이벤트 캡처링이라는 것은 부모에서 자식 요소로 이벤트가 전파되는 방식을 말한다.> 더 알아보기*/}
      {children}
    </article>
  );
}