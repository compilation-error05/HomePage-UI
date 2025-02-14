import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Carousel_My from './Carousel_My';
import TextImageCard from './TextImageCard';


import React from 'react'

export default function Home() {
  return (
    <div className="App">

      <div id="header">
        Home Page
      </div>
      <div>
         <Carousel_My />
      </div>
      <div id="header-home" >
        Features of Our Application
        <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center" id="home">
          <TextImageCard/>
        </div>
      </div>
    </div>
  )
}
