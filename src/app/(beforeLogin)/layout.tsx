import {ReactNode} from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = {children: ReactNode, modal: ReactNode};

export default async function Layout({children,modal}: Props) { //뒤에 타입 쓰는거 너무 길고 복잡하다 싶으면 위의 코드처럼 변수로 만들어서 써도 됨
    return (
      <div className = {styles.container}>
        {/* css모듈의 역할이 가장 간단하면서도 서로 클래스 이름이 겹치지 않게 실제론 클래스 이름 옆에 랜덤의 영+숫자 조합을 모듈별로 다르게 붙여줘서
        클래스 이름이 같아도 겹치지 않음*/}
        {children}
        {modal} 
        {/* 같은 폴더 내에 있으면 modal 사용 가능 */}
      </div>
    );
  }
  

  //주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx
  //주고사 localhost:3000/i/flow/login일 때는 children->i/flow/login/page.tsx, modal->@modal/i/flow/page.tsx