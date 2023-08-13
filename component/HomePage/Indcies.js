import React from 'react'
import style from '../../src/styles/Home/Indices.module.css'
import { Container, Grid } from '@mui/material'
import DoubleHeadPallLine from '../OnlyComponent/DoubleHeadPallLine'
import IndicesaTable from '../OnlyComponent/IndicesaTable'
import IndicesData from '../../data/IndicesData'
import IndicesDataTwo from '../../data/IndicesDataTwo'

const Indcies = () => {
  return (
      <>
         <Container>
            <Grid container>
                <Grid item lg={6}>
                  <div className={style.mainGrid}>
                    <div className={style.border}>
                       <div>
                         <DoubleHeadPallLine  index="Indices" time="AS of 28 Aug 3 : 00"/>
                       </div>
                        <IndicesaTable data={IndicesData} />
                        
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className={style.mainGrid}>
                    <div className={style.border}>
                       <div>
                         <DoubleHeadPallLine   index="SubIndices" time="AS of 28 Aug 3 : 00" />
                       </div>
                        <IndicesaTable data={IndicesDataTwo} />
                        
                    </div>
                  </div>
                </Grid>

                 
            </Grid>
         </Container>
      </>
  )
}

export default Indcies