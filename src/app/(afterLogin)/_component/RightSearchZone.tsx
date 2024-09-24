'use client'

import { usePathname } from 'next/navigation';
import style from './RightSearchZone.module.css';
import SearchForm from './SearchForm';
import { useRef } from 'react';

export default function RightSearchZone() {
    const onChangeAll = () => { };
    const onChangeFollow = () => { };
    const onChangeAnyWhere = () => { };
    const onChangeCurrent = () => { };

    const imageRef = useRef<HTMLInputElement>(null);
    const pathname = usePathname();
    //usePathname 이라는 훅은 주소창의 주소에서 ?앞까지 예를 들어 /@@@?~~ 이러면 /@@@까지의 이름을 가져오는역할
    if (pathname === '/explore') {
        return null;
    }

    if (pathname === '/search') {
        return (
            <div>
                <h5 className={style.filterTitle}>검색 필터</h5>
                <div className={style.filterSection}>
                    <div>
                        <label>사용자</label>
                        <div className={style.radio}>
                            <div>모든 사용자</div>
                            <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
                        </div>
                    
                        <div className={style.radio}>
                            <div>내가 팔로우하는 사람들</div>
                            <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
                        </div>
                    </div>
                    &nbsp;
                    <div>
                        <label>위치</label>
                        <div className={style.radio}>
                            <div>어디에서나</div>
                            <input type="radio" name="df" defaultChecked onChange={onChangeAnyWhere} />
                        </div>
                        <div className={style.radio}>
                            <div>현 위치 주변</div>
                            <input type="radio" name="df" value="on" onChange={onChangeCurrent} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <SearchForm />
    );
}