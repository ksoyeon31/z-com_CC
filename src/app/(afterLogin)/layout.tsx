import {ReactNode} from "react";
import style from '@/app/(afterLogin)/layout.module.css';
import Link from "next/link";
import Image from "next/image";
import ZLogo from '../../../public/zlogo.png';
import NavMenu from '@/app/(afterLogin)/_component/NavMenu';
import LogOutButton from '@/app/(afterLogin)/_component/LogOutButton';
import TrendSection from '@/app/(afterLogin)/_component/TrendSection';
import FollowRecommend from '@/app/(afterLogin)/_component/FollowRecommend';
import RightSearchZone from "./_component/RightSearchZone";

type Props ={ children: ReactNode, modal: ReactNode}

export default function AfterLoginLayout({ children,modal }:Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className = {style.logo} href = '/home'>
              <div className = {style.logoPill}>
                <Image src = {ZLogo} alt = "z.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu /> 
                {/* 현재 위치를 알기 위해선 클라이언트 컴포넌트에서 동작시켜야되기 때문에 컴포넌트를 하나 만드는 것임 */}
              </ul>
              <ul>
                <Link href='/compose/tweet' className={style.postButton}>게시하기</Link>
              </ul>
            </nav>
              <LogOutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
              <TrendSection />
              <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
              </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}

// 페이지를 넘나들때 리렌더링이 안되게 하고 싶으면 layout, 리렌더링이 되게 하고 싶으면 template
// layout과 template 은 공존할 수 없음

{/* svg태그는 벡터 그래픽을 표현하기 위한 XML마크업 언어이다.

주요 SVG 태그 :
<svg> 태그: SVG 문서의 루트 요소로 사용됩니다. 모든 SVG 요소는 <svg> 요소 내에 포함됩니다. 이 태그는 SVG 이미지의 너비(width), 높이(height), 뷰박스(viewbox) 등의 속성을 정의할 수 있습니다.

<rect> 태그: 직사각형을 그리는 데 사용됩니다. x, y 좌표와 너비(width), 높이(height) 속성을 사용하여 위치와 크기를 지정할 수 있습니다.

<circle> 태그: 원을 그리는 데 사용됩니다. 중심 좌표(cx, cy)와 반지름(radius) 속성을 사용하여 원의 위치와 크기를 지정할 수 있습니다.

<line> 태그: 선을 그리는 데 사용됩니다. 시작점과 끝점의 좌표(x1, y1, x2, y2)를 지정합니다.

<path> 태그: 경로를 그리는 데 사용됩니다. 이 태그는 직선, 곡선, 호 등 여러 유형의 선을 정의하는 데 사용됩니다.

<text> 태그: 텍스트를 표시하는 데 사용됩니다. x, y 좌표를 사용하여 텍스트의 위치를 지정할 수 있습니다.

<polygon> 및 <polyline> 태그: 다각형 및 다중 선을 그리는 데 사용됩니다.

<g> 태그: 그룹을 지정하는 데 사용됩니다. 이를 사용하여 여러 요소를 묶어서 그룹으로 관리할 수 있습니다. */}
