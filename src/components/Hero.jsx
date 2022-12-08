import './Hero.css';
import arrowSymbol from '../assets/images/icon-arrow-down.svg';


const Hero = () => {
    return (
        <section className="hero">
            <h1 className="hero-header">WE ARE CREATIVES</h1>
            <img src={arrowSymbol} alt="down arrow" className='arrow-svg' />
        </section>
    );
}

export default Hero;