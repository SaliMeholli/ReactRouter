import React from 'react'
import './Home.css'
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import ios from './images/ios.jpg';
import samsung from './images/samsung.jpg';
import iphonex from './images/iphonex.jpg'
import iphone7plus from './images/iphone7plus.jpg'
import htc from './images/htc.jpg'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Home() {
  return (
    <div className='home'>
            <h1>Unique-Tech App development</h1>
            <p>Meet some of our products</p>
      <div className="container">
          
        <Carousel breakPoints={breakPoints}>
          <Item><img src={ios} alt="" /></Item>
          <Item><img src={samsung} alt="" /></Item>
          <Item><img src={iphonex} alt="" /></Item>
          <Item><img src={iphone7plus} alt="" /></Item>
          <Item><img src={htc} alt="" /></Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Home