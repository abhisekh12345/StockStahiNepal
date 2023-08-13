import React from 'react'
import style from '../../src/styles/Home/HeadPallLine.module.css'
import { Container, Grid, Paper, Typography } from '@mui/material'





const HeadPallLine = ({todaynews}) => {
    return (
        <>
            <div className={style.displayFlex}>
                <div>
                    <Paper elevation={3}
                        className={style.MustreadPaper}
                    >
                        <div className={style.displayFlex}>
                            <Typography className={style.MustreadText}>{todaynews}</Typography>
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
        </>
    )
}

export default HeadPallLine