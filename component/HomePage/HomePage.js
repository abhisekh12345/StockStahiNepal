import React from 'react'
import Navbar from './Navbar'
import LogoandSense from './LogoandSense'
import Searchbar from '../SecondPage/Searchbar'
import MustRead from './MustRead'
import TodayNews from './TodayNews'


const HomePage = () => {
  return (
     <>
          <Navbar />
          <LogoandSense />
           <Searchbar />
           <MustRead />
           <TodayNews />
     </>
  )
}

export default HomePage



