import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ContentsWrapperProps {
    children: React.ReactNode;
}

/**
 * 공통 레이아웃 컴포넌트
 */
const ContentsWrapper: React.FC<ContentsWrapperProps> = ({ children }) => {

    // @TODO: 레이아웃 컴포넌트 구성
    
    return (
        <main className='font-sans relative min-h-screen flex flex-col justify-between antialiased'>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default ContentsWrapper;