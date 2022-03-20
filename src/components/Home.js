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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faBuilding, faShop} from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Home() {
  return (
    <div className='home'>
      <div className="HomeTitle">
            <h1>Unique-Tech App development</h1>
            <p>Meet some of our products</p>
      </div>
      <div className="container">
        <Carousel breakPoints={breakPoints}>
          <Item><img src={ios} alt="" /></Item>
          <Item><img src={samsung} alt="" /></Item>
          <Item><img src={iphonex} alt="" /></Item>
          <Item><img src={iphone7plus} alt="" /></Item>
          <Item><img src={htc} alt="" /></Item>
        </Carousel>
      </div>
      <div className='secondSectionHome'>
        <h1>Build your future</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ducimus temporibus cumque totam vel ipsa dignissimos veritatis at quibusdam impedit nobis aliquam obcaecati explicabo, expedita deserunt asperiores non iste, quidem quam sapiente ad voluptatem dicta? Aspernatur distinctio similique officia quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, incidunt, a laboriosam dolor nihil suscipit vero voluptatum, perferendis libero placeat esse! At voluptatum debitis corporis quam sapiente harum recusandae autem!</p>
        <div className='card'>
          <h1>Apply for a position on our company.</h1>
          <div>
        <FontAwesomeIcon className='icon1' icon={faShop} />
        <FontAwesomeIcon className='icon2' icon={faBuilding} />
        </div>
        </div>
      </div>

      <div className='thirdSectionHome'>
        <h1>About us</h1>
        <div className='skills-container'>
          <div> Message <br /> for people <FontAwesomeIcon className='icon33' icon={faArrowRight} /></div>
          <div>Prove <br /> from the employees <FontAwesomeIcon className='icon33' icon={faArrowRight} /></div>
          <div>Philosophy <br /> of people <FontAwesomeIcon className='icon33' icon={faArrowRight} /></div>
          <div>Training <br /> and transformation <FontAwesomeIcon className='icon33' icon={faArrowRight} /></div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Home