import React from 'react'
import Card from './Card'
import './Main.css'

const Main = () => {
  return (
    <>
        <div className="main">
            {/* <h1>Main component</h1> */}
            <Card imgurl="https://images.unsplash.com/photo-1678441497685-d386e7cdc329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" imgalt="house-img" cardtitle="house img"/>
            <Card imgurl="https://plus.unsplash.com/premium_photo-1670176446887-d3e9aa7ecc61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" imgalt="city-img" cardtitle="city img"/>
        </div>
    </>
  )
}

export default Main