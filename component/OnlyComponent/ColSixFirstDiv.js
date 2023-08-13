import React from 'react'
import style from '../../src/styles/Home/ColSixFirstDiv.module.css'
import { Typography } from '@mui/material'
import Image from 'next/image'


const ColSixFirstDiv = ({img,title,paragraph}) => {

    return (
        <>
            <div className={style.firstNews}>
                <div className={style.contentStart}>
                    <Typography className={style.textEditing}>{title}</Typography>
                    <div className={style.imageDIv}>
                        <Image
                            src={img}
                            alt="stockincrease"
                            width={360}
                            height={266}
                        />
                    </div>
                    <Typography className={style.ContentParagraph}>{paragraph}</Typography>
                </div>
            </div>
        </>
    )
}

export default ColSixFirstDiv