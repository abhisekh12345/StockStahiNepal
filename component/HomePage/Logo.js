import React from 'react'
import style from '../../src/styles/Home/Logo.module.css'
import { Container } from '@mui/material'
import Image from 'next/image'


const Logo = () => {
  return (
   <>
    <Container>
      <div className={style.containerImage}>
          <Image
           src ="/stockLogo1.png"
           alt='stock'
           width= {400}
           height={110}
           />
      </div>
    </Container>
   </>
  )
}

export default Logo