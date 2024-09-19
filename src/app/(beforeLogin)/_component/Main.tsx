import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Image from 'next/image';
import Link from 'next/link';
import zLogo from '../../../../public/zlogo.png'

export default function Main(){
    return (
        <>
          <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        {/* next에선 a태그 대신 Link태그를 씀 > Link태그에 특수한 기능이 있기 때문
        >> a태그는 새로고침 되면서 페이지가 넘어감 */}
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>로그인</Link>
        {/* i/flow/login으로 주소를 지정하지 않은 이유는 실제로 로그인을 실행했을때
        x.com/Login으로 주소였다가 바로 i/flow/login으로 리다이렉트 되기 때문에 login 폴더 page.tsx에서 i/flow/login 리다이렉트 하는 것임 */}

        {/* 왜 i/flow/login으로 안가고 (.)i/flow/login으로 가냐? >> 인터셉트 라우트을 사용하였기 때문. 인터셉트 라우트는 한 화면에서 다른 주소를 가져올 수 있는 역할
        페러렐 라우트는 한 화면에서 두개의 레이아웃을 띄울 수 있는 역할 */}
        {/* 페러렐 라우트와 인터셉트 라우트를 조합하면 모달창을 띄울 때 주소는 변경되고 화면 전환 없이 기존 화면 위에 모달창을 띄울 수 있게 되는 것임  */}

        {/* 대신,  브라우저를 통해 직접 접근/주소를 작성해서 들어왔다면 기존의 i/flow/login이 실행됨 >> 모달창에서 새로고침해도 얘가 실행됨
        다른페이지에서 로그인 이라는 링크(<Link>)를 타고 들어왔을 때는 (.)i/flow/login 즉 모달창이 실행되는 것임*/}

        {/* 가로채기 당하는 상황과 아닌 상황을 잘 구별해야 함 */}
      </div>
        </>
      );
}