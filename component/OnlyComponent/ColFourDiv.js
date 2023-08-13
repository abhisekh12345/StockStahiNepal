import React from 'react'
import style from "../../src/styles/Home/ColFourDiv.module.css"
import { Container, Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'

const ColFourDiv = ({ title, img, paragraph,read}) => {
  return (
   <>
     <div className={style.firstNews}>
                        <div className={style.contentStart}>
                            <Typography className={style.textEditing}>{title}</Typography>
                              <div className={style.imageDIv}>
                                 <Image 
                                 src = {img}
                                 alt ="stockincrease"
                                 width={360}
                                 height={266}
                                 className={style.imgFluid}
                                 />
                              </div>
                              <Typography className={style.ContentParagraph}>{paragraph}</Typography>
                              <div className={style.buttonDIv}>
                              <button type='button' className={style.Button} >{read}</button>
                              </div>
                        </div>
                    </div>
   </>
  )
}

export default ColFourDiv