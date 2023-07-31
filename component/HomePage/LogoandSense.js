import React from 'react'
import Logo from './Logo'
import { Container } from '@mui/material'
import style from "../../src/styles/Home/LogoandSense.module.css"
import Sense from './Sense'

const LogoandSense = () => {



  return (
      <>
          <Container>
            <div className={style.firstpart}>
                <div className={style.logoDiv}>
                  {/* logo */}
                  <Logo />
                </div>
                <div className={style.senesDiv}>
                   <Sense />
                </div>
            </div>
            </Container>
      </>
  )
}

export default LogoandSense