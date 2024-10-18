import Link from 'next/link';
import style from './Post.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// dayjs는 플러그인 형식이어서 fromNow 쓰려면 필요한거 이렇게 import해서 써야함
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostImages from './PostImages';
import PostArticle from './PostArticle';
import {faker} from '@faker-js/faker'; //더미데이터 쉽게 넣어주는 라이브러리
//중괄호 없이 import 하는 것은 모듈이나 라이브러리 전체를 가져오는 것이고, 중괄호 안에 특정 객체 또는 함수를 명시하여 import 하는 것은 해당 객체나 함수만을 가져오는 것
//export 할 때 그냥 export는 이름이 고정되어있기 때문에 중괄호{}로 감싸서 import하고, export default는 중괄호 없이 import 가능

// 한글 플러그인
dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
    noImage?: boolean;
}

export default function Post({noImage}: Props) {

    const target = {
        postId: 1,
        User: {
            id: 'elonmusk',
            nickname: 'Elon Musk',
            image: '/yRsRRjGO.jpg',
        },
        content: '안녕하세요 elonmusk입니다.',
        createAt: new Date(),
        Images: [] as any[],
    }
    if(Math.random() > 0.5 && !noImage){ // 반반 확률로 이미지를 랜덤으로 렌더링함(이때 반반 확률은 이미지가 계정에 이미지가 있을수도, 없을 수도 있는 것을 의미)
        target.Images.push(
            { imageId: 1, link: faker.image.urlLoremFlickr()},
            { imageId: 2, link: faker.image.urlLoremFlickr()},
            { imageId: 3, link: faker.image.urlLoremFlickr()},
            { imageId: 4, link: faker.image.urlLoremFlickr()},
        ) //urlLoremFlickr()은 매번 랜덤한 이미지 보여주는 기능을 함
    }
    return (
        <PostArticle post={target}>
            {/* 부모컴포넌트(postarticle)이 클라이언트 컴포넌트이고 자식 컴포넌트(밑에코드)가 서버컴포넌트일 때
            부모컴포넌트에서 서버컴포넌트를 children 또는 props으로 받아와서 사용하면 가능함
            서버컴포넌트를 import해서 사용하는 건 안됨 */}
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname} />
                    </Link>
                    <div className={style.postShade} />
                </div>
                <div className={style.postBody}>
                <div className={style.postMeta}>
                    <Link href={`/${target.User.id}`}>
                        <span className={style.postUserName}>{target.User.nickname}</span>
                        &nbsp;
                        <span className={style.postUserId}>@{target.User.id}</span>
                        &nbsp;
                        .
                        &nbsp;
                        </Link>
                        <span className={style.postDate}>{dayjs(target.createAt).fromNow(true)}</span>
                        {/* dayjs는 몇분전 이렇게 뜨는거 표시하려고 쓰는 라이브러리 
                        dayjs('@@').fromNow()는 @@날짜로부터 지금까지 몇분전인지 라는 뜻 몇분 이렇게 쓰고 싶으면 fromNow(), 몇분전 이렇게 쓰고 싶으면 fromNow(true)*/}
                    </div>
                    <div>{target.content}</div>
                    <div>
                        <PostImages post={target}/>
                    </div>
                    {<ActionButtons />}
                </div>
            </div>
        </PostArticle>
    );
}