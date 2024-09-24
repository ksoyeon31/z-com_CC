import Link from 'next/link';
import style from './Post.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// dayjs는 플러그인 형식이어서 fromNow 쓰려면 필요한거 이렇게 import해서 써야함
import 'dayjs/locale/ko';
import ActionButtons from './ActionButtons';
import PostArticle from './PostArticle';
// 한글 플러그인



dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post() {

    const target = {
        postId: 1,
        User: {
            id: 'elonmusk',
            nickname: 'Elon Musk',
            image: '/yRsRRjGO.jpg',
        },
        content: '안녕하세요 elonmusk입니다.',
        createAt: new Date(),
        Images: [],
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
                    <div className={style.postImagesection}>
                        {/* {target.Images.length > 0 && (
                            <div className={style.postImageSection}>
                                <img src={target.Images[0]?.link} alt='' />
                            </div>
                        )} */}
                    </div>
                    {<ActionButtons />}
                </div>
            </div>
        </PostArticle>
    );
}