import React from 'react';
import Header, { TabType } from './Header';
import Footer from './Footer';
import { FootNav } from './FootNav';
import { NotificationBar } from './NotificationBar';
import { SearchView } from './SearchView';

interface ContentsWrapperProps {
    children: React.ReactNode;
    title?: string; // 페이지 타이틀
    tabType?: TabType; // 탭 타입
}

/**
 * 공통 레이아웃 컴포넌트
 */
const ContentsWrapper: React.FC<ContentsWrapperProps> = ({ children, title, tabType }) => {

    // @TODO: 레이아웃 컴포넌트 구성

    return (
        <main className='font-sans relative min-h-screen flex flex-col justify-between antialiased'>
            <Header title={title} tabType={tabType} />
            {children}
            <Footer />
            <FootNav />

            {/* 알림 사이드 창 */}
            <NotificationBar />

            {/* 검색창 */}
            <SearchView />
        </main>
    )
}

export default ContentsWrapper;