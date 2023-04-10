import React from 'react'

function Plans() {
  return (
    <div className='plan'>
      <h1 className='heading'> choose a <span>Service!</span> </h1>

<div className='box-container'>

    <div className='box'>
        <h3 className='title'>Mini Glam</h3>
<i class="fa-duotone fa-sparkles"></i>        <div className='list'>
            <p> Perfect for any occasion <span className='fas fa-check'></span> </p>
            <p> Soft Brows<span className='fas fa-check'></span> </p>
            <p> Strip Lashes <span className='fas fa-check'></span> </p>
            <p> Face makeup only! <span className='fas fa-check'></span> </p>
        </div>
        <div className='amount'><span>$</span>95</div>
        <button className='btn'> Book </button>
    </div>      

    <div className='box'>
        <h1 className='title'>Natural Full Face</h1>
        <div className='list'>
            <p> Skin prep <span className='fas fa-check'></span> </p>
            <p> Powder Contour <span className='fas fa-check'></span> </p>
            <p> Mink Lashes <span className='fas fa-check'></span> </p>
            <p> Very light eye shadow <span className='fas fa-check'></span> </p>
        </div>
        <div className='amount'><span>$</span>115</div>
        <button className='btn'> Book </button>
    </div>

    <div className='box'>
        <h3 className="title">Full Face Glam</h3>
        <div className='list'>
            <p> Detailed eye makeup <span className='fas fa-check'></span> </p>
            <p> Lip makeup (subtle or bold)<span className='fas fa-check'></span> </p>
            <p>  Mink Lashes <span className='fas fa-check'></span> </p>
            <p> Body Glow/ Shimmer included <span className='fas fa-check'></span> </p>
        </div>
        <div className='amount'><span>$</span>125</div>
        <button className='btn'> Book </button>
    </div>
    <div className='box'>
        <h1 className='title'>Bridal Makeup</h1>
        <div className='list'>
            <p> Bridal Consultation <span className='fas fa-check'></span> </p>
            <p> Make up for bride <span className='fas fa-check'></span> </p>
            <p> 4 brides maids <span className='fas fa-check'></span> </p>
            <p> Mother of groom and bride<span className='fas fa-check'></span> </p>
        </div>
        <div className='amount'><span>$</span>1000</div>
        <button className='btn'> Book </button>
    </div>

</div>  
      
    </div>
  )
}

export default Plans
