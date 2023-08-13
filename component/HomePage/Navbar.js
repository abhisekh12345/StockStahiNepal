import { Container, Typography } from '@mui/material'
import React from 'react'
import style from "../../src/styles/Home/Nabar.module.css"
import BsFillCaretRightFill from "react-icons/bs"
import Image from 'next/image';
import HeadingNewsData from '../../data/HeadingNewsData';

const Navbar = () => {
  return (
    <>
      <div className={style.backgroundColour}>
        <Container>
          <div className={style.startNavbar}>
            <div className={style.displayFlex}>
              {/* home */}
              <div className={style.home}>
                <Typography className={style.fontsize}> Home</Typography>

              </div>

              {/* News */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>News</Typography>
                <div className={style.dropDownContent2}> 
                 <div className={style.displayflex}>
                 <div className={style.firstdiv}>
                    <Typography variant='subtitle1' fontWeight={600} mb={2} >Nepal's Looming Food Crisis- How Global Events Impact Our Food Security?</Typography>
                    <div className={style.image}>
                      <Image
                        src="/news1.jpg"
                        alt="My Image"
                        width={300}
                        height={200}
                      />
                    </div>
                    <div className={style.paragraph}>
                      <Typography variant='body1' mt={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus explicabo similique nobis unde voluptates aut inventore dolores, et alias.</Typography>
                    </div>
                  </div>
                  <div className={style.seconddiv}>
                     
                  </div>
                 </div>
                 

                </div>
              </div>
              {/* NepseData */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>NepseData</Typography>
              </div>
              {/* Invesment Opportunities */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>Investment </Typography>
              </div>
              {/* Coperate Action */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>Coperate </Typography>
              </div>
              {/* Market */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>Market</Typography>
              </div>
              {/* Ipo/Fpo */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>IPO/FPO</Typography>
              </div>
              {/* Annoncement */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>Annoncements</Typography>
              </div>
              {/* report */}
              <div className={`${style.News} ${style.marginLeft}`}>
                <Typography className={style.fontsize}>Report</Typography>
              </div>
            </div>
          </div>
        </Container>

      </div>
    </>
  )
}

export default Navbar