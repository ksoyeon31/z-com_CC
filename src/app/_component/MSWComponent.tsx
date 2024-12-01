'use client';
import { useEffect } from 'react';

export const MSWComponent = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') { //브라우저에서만 돌아간다는 것을 보장해주기 위해 if문으로 한번더 감싼 것 > MSW 버전2로 바뀌면서 바뀐점
            if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
                require("@/mocks/browser");
            }
        }
    }, []);

    return null;
};

// 전체 레이아웃에 적용