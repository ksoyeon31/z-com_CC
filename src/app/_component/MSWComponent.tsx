'use client';
import { useEffect } from 'react';

export const MSWComponent = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
                require("@/mocks/browser");
            }
        }
    }, []);

    return null;
};

// 전체 레이아웃에 적용