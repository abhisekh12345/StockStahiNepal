import React from 'react'
import style from '../../src/styles/Home/ColSixFirstDiv.module.css'
import { Typography } from '@mui/material'
import Image from 'next/image'

const ColSixFirstDiv = () => {
    return (
        <>
            <div className={style.firstNews}>
                <div className={style.contentStart}>
                    <Typography className={style.textEditing}>The Rising Involvement of Nepalese Youths in the Share Market: Understanding the Pros and Cons</Typography>
                    <div className={style.imageDIv}>
                        <Image
                            src="/stockincrease.jpg"
                            alt="stockincrease"
                            width={360}
                            height={266}
                        />
                    </div>
                    <Typography className={style.ContentParagraph}>he allure of the share market has captivated the minds of Nepalese youths in recent years. As technology continues to democratize financial markets, more and more young individuals are enticed by the potential profits and investment opportunities that this realm promises. The participation of youths in the share market comes with its own set of advantages and pitfalls. In this comprehensive article, we will delve into the pros and cons of youths engaging in the share market of Nepal, explore the concept of herd mentality, and emphasize the importance of patience as a key virtue in the world of investing.</Typography>
                </div>
            </div>
        </>
    )
}

export default ColSixFirstDiv