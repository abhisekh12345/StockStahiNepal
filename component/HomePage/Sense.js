import React from 'react'
import style from "../../src/styles/Home/Sense.module.css"
import { Container, Typography } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SenseData from '../../data/SenseData';

const Sense = () => {

    var settings = {
        dots: false,
        arrows : false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
       
    }



    return (



        

            <div className={style.mainSense}>


                <Slider {...settings}>
                    {
                        SenseData.map((item) => {
                            const { id, name, bigNumber, onesmallNumber, twosmallNumber } = item
                            if ((id % 2) === 0) {

                                return (
                                    <div className={style.firstClassRed}>

                                        <div className={style.verticalLine}>

                                        </div>
                                        <div className={style.information}>
                                            <Typography className={style.HeadingFont} mt={1}>Nepse</Typography>
                                            <Typography className={style.numberFontSize} mt={1}>133.15</Typography>
                                            <div className={style.twovalue}>
                                                <Typography className={style.smallFontsize} mt={1}>-177</Typography>
                                                <Typography className={style.smallFontsize} mt={1} ml={1}>(-1.47%)</Typography>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className={style.firstClassRed}>

                                        <div className={style.greenverticalLine}>

                                        </div>
                                        <div className={style.information}>
                                            <Typography className={style.HeadingFont} mt={1}>Float</Typography>
                                            <Typography className={style.numberFontSize} mt={1}>133.15</Typography>
                                            <div className={style.twovalue}>
                                                <Typography className={`${style.smallFontsize} ${style.coloring}`} mt={1}>-177</Typography>
                                                <Typography className={`${style.smallFontsize} ${style.coloring}`} mt={1} ml={1} >(-1.47%)</Typography>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </Slider>




             


            </div>
       



    )
}

export default Sense