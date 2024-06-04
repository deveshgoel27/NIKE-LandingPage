import React from 'react'

function Section() {
  return (
   <main className='section container'>
    <div className='section-content'>

        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="main-btn">
            <button className='btn'>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>

        <div className='shopping'>
            <p>Also Availabe On</p>

        <div className='brand-icons'>
            <img src='public\images\amazon.png' alt='amzn'/>
            <img src='public\images\flipkart.png' alt='fk'/>
        </div>
        </div>
    </div>

    <div className="main-image">
        <img src='public\images\hero-image.png' alt='main'/>
    </div>

   </main>
  )
}

export default Section