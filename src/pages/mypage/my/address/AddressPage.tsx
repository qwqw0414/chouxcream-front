import ContentsWrapper from '@/components/layout/ContentsWrapper'
import MyPageNav from '@/components/layout/MyPageNav'
import React from 'react'

const AddressPage: React.FC = () => {
  return (
    <ContentsWrapper>
      <MyPageNav title="주소록" bordered={false}>
        AddressPage
      </MyPageNav>
    </ContentsWrapper>
  )
}

export default AddressPage