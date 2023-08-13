import React from 'react'
import style from '../../src/styles/Home/Upcoming.module.css'
import HeadPallLine from '../OnlyComponent/HeadPallLine'
import { Container, Grid, Paper, Typography } from '@mui/material'
import UpcomingIPTOable from '../OnlyComponent/UpcomingIPTOable'
import Calander from '../OnlyComponent/Calander'



const UpcomingIpo = () => {
    const todaysNewsValue = "Upcoming Ipo"

    const UpcommingShares = [
        { id: 1, name: "IPO", },
        { id: 2, name: "FPO", },
        { id: 3, name: "IPO-Local", },
        { id: 4, name: "Right", },
        { id: 5, name: "Mutal-fund", },
        { id: 6, name: "Bonds/Debentures", },

    ]

    return (
        <>
            <Container className={style.container}>
                <Grid container>
                    <Grid item lg={7.5} >
                        <HeadPallLine todaynews={todaysNewsValue} />
                        <div className={style.boxDiv}>
                            {
                                UpcommingShares.map((item) => {
                                    const { name, id } = item
                                    if (id === 1) {
                                        return (
                                            <div className={style.box} key={id}>
                                                <Typography>{name}</Typography>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className={`${style.box} ${style.marginLeft}`} key={id} >
                                                <Typography>{name}</Typography>
                                            </div>
                                        )
                                    }
                                })
                            }

                        </div>
                        <UpcomingIPTOable />
                    </Grid>

                    <Grid item lg={4} ml={4}>
                           <Calander />
                    </Grid>

                </Grid>
            </Container>

        </>
    )
}

export default UpcomingIpo