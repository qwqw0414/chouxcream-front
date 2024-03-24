import React, { Fragment } from 'react';
import Header, { TabType } from './Header';
import Footer from './Footer';
import { FootNav } from './FootNav';
import { NotificationBar } from './NotificationBar';
import { SearchView } from './SearchView';
import { size } from './type';

interface ContentsWrapperProps {
    children: React.ReactNode;
    title?: string; // 페이지 타이틀
    tabType?: TabType; // 탭 타입
    block?: size // 레이아웃 블록 : 사이즈 입력시 해당 크기 기준으로 레이아웃 블록 설정
}
interface VisibleControllProps {
    children: React.ReactNode; // 레이아웃 블록으로 감싸진 컴포넌트
    type: size; // 레이아웃 블록 사이즈
}

/**
 * 레이아웃 블록 컴포넌트
 */
const VisibleControll: React.FC<VisibleControllProps> = ({ children, type }) => {
    return (<Fragment>
        <div className={`${type === true ?
            'hidden' :
            type === 'xs' ? 'hidden sm:block' :
                type === 'sm' ? 'hidden md:block' :
                    type === 'md' ? 'hidden lg:block' :
                        type === 'lg' ? 'hidden xl:block' :
                            type === 'xl' ? 'hidden 2xl:block' :
                                type === 'xxl' ? 'hidden 3xl:block' : ''
            }`}>{children}</div>
    </Fragment>)
}

/**
 * 공통 레이아웃 컴포넌트
 */
const ContentsWrapper: React.FC<ContentsWrapperProps> = ({ children, title, tabType, block }) => {

    // @TODO: 레이아웃 컴포넌트 구성
    console.log(`block: ${block}`);

    return (
        <main className='font-sans relative min-h-screen flex flex-col justify-between antialiased'>
            <VisibleControll type={block} ><Header title={title} tabType={tabType} /></VisibleControll>

            <div className='grow'>
                {children}
            </div>
            <Footer />

            {/* 하단 탭 */}
            <FootNav />

            {/* 알림 사이드 창 */}
            <NotificationBar />

            {/* 검색창 */}
            <SearchView />
        </main>
    )
}

export default ContentsWrapper;