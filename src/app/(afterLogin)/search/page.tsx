import style from './search.module.css';
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Tab from "@/app/(afterLogin)/search/_component/Tab";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}

//주소창에 정보를 넣는 것을 searchParams라고 함 예)검색할때 검색한 단어가 그대로 주소창에 반영되는것
//searchParams는 page.tsx에 기본적으로 props으로 포함되어있음
//searchParams:{q:string} 이란 정보를 q에 담아 주소창에 표시한다는 의미
//이후에 값을 가져오고 싶을 땐 searchParam.q 이런식으로 가져올 수 있음
//q나 f,pf 등 뒤에 ?가 붙는 이유는 정보를 담을 수도 있고 안 담을 수도 있기 때문 > rightsearchzone에선 검색해도 주소에 반영되게하지 않을 것이기 때문에 ?를 붙인다
export default function Search({ searchParams }: Props) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton/>
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab/>
      </div>
      <div className={style.list}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        {/*<SearchResult searchParams={searchParams} />*/}
      </div>
    </main>
  )
}