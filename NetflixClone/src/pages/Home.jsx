import React from 'react'
import Main from '../components/Main'
import requests from '../Request'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowid ="1" title="Up Coming " URL={requests.requestUpcoming}/>
        <Row rowid ="2" title="Popular " URL={requests.requestPopular}/>
        <Row rowid ="4" title="Trending " URL={requests.requestTrending}/>
        <Row rowid ="5" title="Top Rated " URL={requests.requestTopRated}/>
        <Row rowid ="3" title="Horror " URL={requests.requestHorror}/>
    </>
  )
}

export default Home