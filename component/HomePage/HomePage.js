import React from 'react'
import Navbar from './Navbar'
import LogoandSense from './LogoandSense'
import Searchbar from '../SecondPage/Searchbar'
import MustRead from './MustRead'
import TodayNews from './TodayNews'
import UpcomingIpo from './UpcomingIpo'
import TradingViewWidget from './StockWidget'
import Indcies from './Indcies'


const HomePage = () => {
  return (
     <>
          <Navbar />
          <LogoandSense />
           <Searchbar />
           <MustRead />
           <TodayNews />
           <UpcomingIpo />
           <TradingViewWidget />
           <Indcies />
     </>
  )
}

export default HomePage



