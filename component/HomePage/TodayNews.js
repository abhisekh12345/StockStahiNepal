import React from 'react'
import style from '../../src/styles/Home/TodayNews.module.css'
import { Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import ColSixFirstDiv from '../OnlyComponent/ColSixFirstDiv'


const TodayNews = () => (
    <>
        <Container className={style.container} >
            <div className={style.displayFlex}>
                <div>
                    <Paper elevation={3}
                        className={style.MustreadPaper}
                    >
                        <div className={style.displayFlex}>
                            <Typography className={style.MustreadText}>Today News</Typography>
                            <div className={style.smallMargingleft}>
                                <div className={style.pallaFlex}>
                                    <div class={style.parallelogram1}></div>
                                    <div class={style.parallelogram2}></div>
                                    <div class={style.parallelogram3}></div>
                                </div>
                            </div>
                        </div>

                    </Paper>
                </div>
                <div>
                    <div className={style.horizontalLine}>

                    </div>
                </div>

            </div>
            <Grid container>
                <Grid item lg={4}>
                    <div className={style.firstNews}>
                        <div className={style.contentStart}>
                            <Typography className={style.textEditing}>The Rising Involvement of Nepalese Youths in the Share Market: Understanding the Pros and Cons</Typography>
                              <div className={style.imageDIv}>
                                 <Image 
                                 src = "/stockincrease.jpg"
                                 alt ="stockincrease"
                                 width={360}
                                 height={266}
                                 className={style.imgFluid}
                                 />
                              </div>
                              <Typography className={style.ContentParagraph}>he allure of the share market has captivated the minds of Nepalese youths in recent years. As technology continues to democratize financial markets, more and more young individuals are enticed by the potential profits and investment opportunities that this realm promises. The participation of youths in the share market comes with its own set of advantages and pitfalls. In this comprehensive article, we will delve into the pros and cons of youths engaging in the share market of Nepal, explore the concept of herd mentality, and emphasize the importance of patience as a key virtue in the world of investing.</Typography>
                        </div>
                    </div>

                    
            

                

                </Grid>
                <Grid item lg={5.7} ml={2}>
                    <ColSixFirstDiv />
                      
                </Grid>
            </Grid>
        </Container>

    </>
)

export default TodayNews