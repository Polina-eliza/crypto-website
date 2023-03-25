import './Hero.css';
import HeroImg from '../assets/Hero-img.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            {/* Left side */}
            <div className='left'>
                <p>Trade cryptocurrencies with your retirement account 24/7.</p>
                <h1>Invest in Cryptocurrency with Your IRA</h1>
                <p>Buy, Sell and Store hundreds of cryptocurrencies</p>
                <div className='input-container'>
                    <input type="email" placeholder='Enter your email' />
                    <button className='btn'>Learn more</button>
                </div>
            </div>
            {/* Right side */}
            <div className='right'>
                <div className='img-container'>
                    <img src={HeroImg} alt="" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Hero;