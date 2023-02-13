import React from 'react'
import Main from '../component/Main'
import Row from '../component/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
      <Main fetchURL={requests.requestPopular}/>
      <Row title="TopRated" fetchURL={requests.requestTopRated}/>
      <Row title="Popular" fetchURL={requests.requestPopular}/>
      <Row title="Trending" fetchURL={requests.requestTrending}/>
      <Row title="Horror" fetchURL={requests.requestHorror}/>
      <Row title="Upcoming" fetchURL={requests.requestUpcoming}/>
    </div>
  )
}

export default Home
