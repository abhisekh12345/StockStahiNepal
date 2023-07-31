import React from 'react'
import style from "../../src/styles/Home/MustRead.module.css"
import { Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import GoldandSilver from './GoldandSilver'

const MustRead = () => {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item lg={8}>
                        <div className={style.mainContainer}>
                            {/* mustRed */}
                            <div className={style.displayFlex}>
                                <div>
                                    <Paper elevation={3}
                                        className={style.MustreadPaper}
                                    >
                                        <Typography className={style.MustreadText}>Must Read news</Typography>
                                    </Paper>
                                </div>
                                 <div>
                                    <div className={style.horizontalLine}>

                                    </div>
                                 </div>

                            </div>
                            
                            {/* mainContent */}
                              <div className={style.Contentstart}>
                                  <div>
                                    <Typography className={style.ContentHeading}> Foreign institutions lower stakes in IT biggies, barring Wipro, HCL Tech Masses are coming: A growing challenge threatens big FMCG cos</Typography>
                                  </div>
                                  <div>
                                      <div className={style.imageDiv}>
                                           <Image 
                                            src="/headnews.jpg"
                                            alt='head'
                                            width={450}
                                            height={300}
                                           />
                                      </div>
                                  </div>
                                   <div>
                                    <Typography className={style.ContentParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nisi cumque sequi, alias sapiente commodi distinctio architecto laborum atque magni numquam voluptatibus. Natus soluta distinctio ex dolorem ratione cumque eius necessitatibus doloribus id quis consequuntur eligendi, voluptates fugiat doloremque voluptatum ipsum perferendis sed dolor beatae! Sequi deserunt fugiat doloribus cupiditate quam minima vel reprehenderit qui voluptate natus? Rem eos aperiam accusantium facere tempora quasi, iusto deleniti rerum odio, sint mollitia placeat nulla similique optio ipsum, modi quis corrupti pariatur ipsa!</Typography>
                                      
                                   </div>
                              </div>

                        </div>
                    </Grid>
                     <Grid item lg={4}>
                        <div className={style.mainContainertwo}>
                            <GoldandSilver />
                         </div>
                     </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default MustRead