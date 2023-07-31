import React from 'react'
import style from "../../src/styles/SecondPa/SearchBar.module.css"
import { Container } from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';


const Searchbar = () => {
    return (
        <>
            <Container>
                <div className={style.mainContainer}>




                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
                         className={style.editPaper}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1, }}
                            placeholder="Search Company Name"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            className={style.inputedit}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                </div>
            </Container>
        </>
    )
}

export default Searchbar