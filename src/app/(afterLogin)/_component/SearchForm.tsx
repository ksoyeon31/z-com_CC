import style from './RightSearchZone.module.css';

type Props = {q?:string}
//q뒤에 ?가 붙는 이유는 정보를 담을 수도 있고 안 담을 수도 있기 때문 > rightsearchzone에선 검색해도 주소에 반영되게하지 않을 것이기 때문에 ?를 붙인다
export default function SearchForm({q}:Props) {
    return (
        <div style={{ marginBottom: 60, width: 'inherit' }}>
            <form className={style.search}>
                <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                    {/* svg태그는 벡터 그래픽을 표현하기 위한 XML마크업 언어이다. */}
                    <g>
                        <path
                            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                    </g>
                </svg>
                <input type='search' />
            </form>
        </div>
    );
}