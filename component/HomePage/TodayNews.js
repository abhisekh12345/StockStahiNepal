import React from 'react'
import style from '../../src/styles/Home/TodayNews.module.css'
import { Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import ColSixFirstDiv from '../OnlyComponent/ColSixFirstDiv'
import ColFourDiv from '../OnlyComponent/ColFourDiv'
import NewsData from '../../data/NewsData'
import HeadPallLine from '../OnlyComponent/HeadPallLine'


const TodayNews = () => {

    const TwoHeading = NewsData.slice(0, 2)
    console.log(TwoHeading)

    const OnlyFour = NewsData.slice(0, 4)


    return (

        <>
            <Container className={style.container} >
                <HeadPallLine todaynews="Today News" />
                <Grid container>
                    {
                        TwoHeading.map((item) => {
                            const { id, title, img, paragraph } = item
                            if ((id % 2) != 0) {
                                return (
                                    <>
                                        <React.Fragment key={id}>
                                            <Grid item lg={5.9} md={6} >
                                                <ColSixFirstDiv
                                                    title={title}
                                                    img={img}
                                                    paragraph={paragraph} />
                                            </Grid>
                                        </React.Fragment>
                                    </>
                                )
                            }
                            else {
                                return (
                                    <>
                                        <React.Fragment key={id}>
                                            <Grid item lg={5.9} md={6} ml={2}>
                                                <ColSixFirstDiv
                                                    title={title}
                                                    img={img}
                                                    paragraph={paragraph} />
                                            </Grid>
                                        </React.Fragment>
                                    </>
                                )
                            }
                        })
                    }

                    {
                        OnlyFour.map((item) => {
                            const { id, title, img, paragraph, read } = item
                            if (id  == 1) {
                                return (
                                    <React.Fragment key={id}>
                                        <Grid item lg={2.8} md={4} >
                                            <ColFourDiv
                                                title={title}
                                                img={img}
                                                read={read}
                                                paragraph={paragraph}
                                            />
                                        </Grid>
                                    </React.Fragment>
                                )
                            }
                            else{
                                return(
                                    <React.Fragment key={id}>
                                        <Grid item lg={2.9} md={4} ml={1.4} >
                                            <ColFourDiv
                                                title={title}
                                                img={img}
                                                read={read}
                                                paragraph={paragraph}
                                            />
                                        </Grid>
                                    </React.Fragment>
                                )
                            }
                        })
                    }





                </Grid>
            </Container>

        </>
    )
}

export default TodayNews