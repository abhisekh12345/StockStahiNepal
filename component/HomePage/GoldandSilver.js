import React from 'react'
import style from "../../src/styles/Home/GoldandSilver.module.css"
import { Container, Grid, Paper, Typography } from '@mui/material'


const GoldandSilver = () => {
    return (
        <>
            <div className={style.maniContainer}>
                {/* heading Gold and silver */}
                <div className={style.displayFlex}>
                    <div>
                        <Paper elevation={3}
                            className={style.MustreadPaper}
                        >
                            <Typography className={style.MustreadText}>Gold / Silver  Price</Typography>
                        </Paper>
                    </div>
                    <div>
                        <div className={style.horizontalLine}>

                        </div>
                    </div>

                </div>
                {/* startingContent */}



                <div className={style.startingContent}>
                    <div className={style.contentHeading}>
                        <div>
                            <Typography className={style.ContentText}>Today Gold Price</Typography>
                        </div>
                        <div className={style.smallMargingleft}>
                            <div className={style.pallaFlex}>
                                <div class={style.parallelogram1}></div>
                                <div class={style.parallelogram2}></div>
                                <div class={style.parallelogram3}></div>
                            </div>
                        </div>

                    </div>

                </div>


                {/* date and time */}
                <div className={style.displayEnd}>
                    <Paper elevation={3}
                        className={style.MustreadPaperGold}
                    >
                        <Typography className={style.TextDate}>29 July  9 : 15 Am</Typography>
                    </Paper>
                </div>

                {/* gold Table */}
                <div className={style.goldTable}>
                    <div className={style.firstColumn}>
                        <Typography className={style.GoldText}>1 Tola (१ तोला)</Typography>
                        <Typography className={style.GoldSMallText}>Fine Gold (9999) – छापावाल सुन</Typography>
                        <Typography className={style.GoldSMallText}>Tejabi Gold – तेजाबी सुन</Typography>


                    </div>
                    <div className={style.secondColumn}>
                        <Typography className={style.GoldText}>Price NRs.(मूल्य रु)</Typography>
                        <Typography className={style.GoldSMallText} textAlign='center'>112600</Typography>
                        <Typography className={style.GoldSMallText} textAlign='center'>112050</Typography>

                    </div>
                </div>


                {/* 10 gram Gold Table? */}
                <div className={style.goldTable2}>
                    <div className={style.firstColumn}>
                        <Typography className={style.GoldText}>10 Grams (१० ग्राम)</Typography>
                        <Typography className={style.GoldSMallText}>Fine Gold (9999) – छापावाल सुन</Typography>
                        <Typography className={style.GoldSMallText}>Tejabi Gold – तेजाबी सुन</Typography>


                    </div>
                    <div className={style.secondColumn}>
                        <Typography className={style.GoldText}>Price NRs.(मूल्य रु)</Typography>
                        <Typography className={style.GoldSMallText} textAlign='center'>96535</Typography>
                        <Typography className={style.GoldSMallText} textAlign='center'>96065</Typography>

                    </div>
                </div>

                {/* Today silver Price */}
                <div className={style.startingContent2}>
                    <div className={style.contentHeading}>
                        <div>
                            <Typography className={style.ContentText}>Today Silver Price</Typography>
                        </div>
                        <div className={style.smallMargingleft}>
                            <div className={style.pallaFlex}>
                                <div class={style.parallelogram1}></div>
                                <div class={style.parallelogram2}></div>
                                <div class={style.parallelogram3}></div>
                            </div>
                        </div>

                    </div>

                </div>



                {/* Silver date and Time */}
                <div className={style.displayEnd}>
                    <Paper elevation={3}
                        className={style.MustreadPaperGold}
                    >
                        <Typography className={style.TextDate}>29 July  9 : 15 Am</Typography>
                    </Paper>
                </div>

                 {/* silver table 1 */}
                 <div className={style.goldTable}>
                    <div className={style.firstColumn}>
                        <Typography className={style.GoldText}>1 Tola (१ तोला)</Typography>
                        <Typography className={style.GoldSMallText}>Silver – चाँदी</Typography>


                    </div>
                    <div className={style.secondColumn}>
                        <Typography className={style.GoldText}>Price NRs.(मूल्य रु)</Typography>
                        <Typography className={style.GoldSMallText} textAlign='center'>1450</Typography>

                    </div>
                </div>
               
                 {/* silver table 2 */}
                 <div className={style.goldTable2}>
                    <div className={style.firstColumn}>
                        <Typography className={style.GoldText}>Silver – चाँदी</Typography>
                        <Typography className={style.GoldSMallText}>Silver – चाँदी</Typography>


                    </div>
                    <div className={style.secondColumn}>
                        <Typography className={style.GoldText}>Price NRs.(मूल्य रु)</Typography>
                        <Typography className={style.GoldSMallText} textAlign='center'>1243</Typography>

                    </div>
                </div>




            </div>

        </>
    )
}

export default GoldandSilver