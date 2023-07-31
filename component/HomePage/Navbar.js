import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material'
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
                      <div className={style.cardFlex} >
                        {
                          HeadingNewsData.map((item) => {
                            const { id, img, title } = item
                            if ((id % 2) === 0) {
                              return (

                                <Card sx={{ minWidth: 200, marginLeft: 1 }} key={id}>
                                  <CardMedia
                                    sx={{ height: 135 }}
                                    image={img}
                                  />
                                  <CardContent>
                                    <Typography variant="subtitle1" >
                                      {title}
                                    </Typography>

                                  </CardContent>
                                </Card>

                              )
                            }else{
                              return(
                                <Card sx={{ minWidth: 200,  }} key={id}>
                                  <CardMedia
                                    sx={{ height: 135 }}
                                    image={img}
                                  />
                                  <CardContent>
                                    <Typography variant="subtitle1" >
                                      {title}
                                    </Typography>

                                  </CardContent>
                                </Card>
                              )
                            }

                          })
                        }
                      </div>
                      <div className={style.buttonPadding}>
                        <button type='button' className={style.buttonEdit} >View All News </button>
                      </div>

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