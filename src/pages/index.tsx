import React, { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Cadastro from './cadastro'
import { Header } from '../components/Header'

const Index: NextPage = () => {
  const router = useRouter()

  const { slug } = router.query
  return (
    <Header>
      <Cadastro />
    </Header>
  )
}
export default Index
