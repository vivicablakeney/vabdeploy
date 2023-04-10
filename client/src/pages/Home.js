import React from 'react'
import Slider from '../components/Slider'




function Home() {
return (
<div className="html">
 <div className="home">
<div className="content">
<h3> welcome to VAB Cosmetics</h3>
<a href="/shop"><button>Get Vabulous!</button></a>
</div>
{/* <img src="images/gloss.jpg" className='wave'/> */}
</div>
<Slider/>
<div className='about'>
<div className='image'>
<img src="images/viv.png"/>
</div>
<div class="content">
<h3><span> Meet</span> The Creator</h3>
<p>VAB Cosmetics is a Black-Owned makeup company that aligns with values of inclusivity, affordability, and cruelty-free beauty. VAB Galore is dedicated to providing luxury and high-quality makeup products at an affordable price point. The company is also passionate about using only cruelty-free ingredients, which are better for animals and the environment. Beyond the products, VAB Galore is driven by the CEO's passion for empowering women and building self-confidence. By purchasing from this company, customers can feel good about supporting a business that prioritizes ethics and values, while also indulging in high-quality makeup products that make them look and feel their best. Overall, choosing to shop from VAB Galore is a decision that supports a company with a commitment to creating a more ethical and inclusive beauty industry.



</p>

</div>
</div>

</div>



)
}

export default Home;

