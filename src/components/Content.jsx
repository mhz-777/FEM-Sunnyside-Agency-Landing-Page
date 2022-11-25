import './Content.css';
import mobileEgg from '../assets/mobile-images/image-transform.jpg';
import desktopEgg from '../assets/desktop-images/image-transform.jpg';
import mobileCup from '../assets/mobile-images/image-stand-out.jpg';
import desktopCup from '../assets/desktop-images/image-stand-out.jpg';
import mobileCherries from '../assets/mobile-images/image-graphic-design.jpg';
import desktopCherries from '../assets/desktop-images/image-graphic-design.jpg';
import mobileOrange from '../assets/mobile-images/image-photography.jpg';
import desktopOrange from '../assets/desktop-images/image-photography.jpg';



const Content = () => {
    return (
        <div className="content">
            <section className="section-transform">
                <picture className='transform-picture'>
                    <source media="(max-width: 750px)" srcSet={mobileEgg} />
                    <img src={desktopEgg} alt="egg" />
                </picture>
                <section className="transform-info">
                    <h1 className="transform-info-heading">Transform your brand</h1>
                    <p className="transform-info-desc">
                        We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <a href="#" className="transform-info-link">LEARN MORE</a>
                </section>
            </section>
            <section className="section-standout">
                <picture className="standout-picture">
                    <source media="(max-width: 750px)" srcSet={mobileCup} />
                    <img src={desktopCup} alt="cup" />
                </picture>
                <section className="standout-info">
                    <h1 className="standout-info-heading">Stand out to the right audience</h1>
                    <p className="standout-info-desc">
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
                        we'll build and extend your brand in digital places /
                    </p>
                    <a href="#" className='standout-info-link'>LEARN MORE</a>
                </section>
            </section>
            <section className="section-gfxdesign">
                <picture className="section-gfxdesign-cherries">
                    <source media="(max-width: 750px)" srcSet={mobileCherries} />
                    <img src={desktopCherries} alt="cherries" />
                </picture>
                <section className="gfxdesign-info">
                    <h1 className="dfxdesign-info-heading">Graphic Design</h1>
                    <p className="gfxdesign-info-desc">
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                    </p>
                </section>
            </section>
            <section className="section-photography">
                <picture className="photography-orange">
                    <source media="(max-width: 750px)" srcSet={mobileOrange} />
                    <img src={desktopOrange} alt="orange" />
                </picture>
                <section className="photography-info">
                    <h1 className="photography-info-heading">Photography</h1>
                    <p className="photography-info-desc">
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </section>
            </section>
        </div>
    );
}

export default Content;