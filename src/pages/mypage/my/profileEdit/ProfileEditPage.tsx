import ContentsWrapper from '@/components/layout/ContentsWrapper'
import MyPageNav from '@/components/layout/MyPageNav'
import React from 'react'

const ProfileEditPage: React.FC = () => {
  return (
    <ContentsWrapper>
      <MyPageNav title="프로필 관리" bordered={true}>
        ProfileEditPage
      </MyPageNav>
    </ContentsWrapper>
  )
}

export default ProfileEditPage