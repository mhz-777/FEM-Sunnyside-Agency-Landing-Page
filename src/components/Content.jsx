import './Content.css';
import mobileEgg from '../assets/mobile-images/image-transform.jpg';
import desktopEgg from '../assets/desktop-images/image-transform.jpg';
import mobileCup from '../assets/mobile-images/image-stand-out.jpg';
import desktopCup from '../assets/desktop-images/image-stand-out.jpg';

const Content = () => {
    return (
        <div className="content">
            <section className="section-transform">
                <picture className="section-picture">
                    <source media="(max-width: 550px)" srcSet={mobileEgg} />
                    <source media="(min-width: 600px)" srcSet={desktopEgg} />
                    <img src={mobileEgg} alt="egg" />
                </picture>
                <section className="section-info">
                    <h1 className="info-heading">Transform your brand</h1>
                    <p className="section-info-desc">
                        We are a full-service creative agency specializing in helping brands grow fast.
                        Engage your clients through compelling visuals that do most of the marketing for you.
                    </p>
                    <a href="#" className="transform-info-link">LEARN MORE</a>
                </section>
            </section>
            <section className="section-standout">
                <picture className="section-picture">
                    <source media="(max-width: 550px)" srcSet={mobileCup} />
                    <source media="(min-width: 600px)" srcSet={desktopCup} />
                    <img src={mobileCup} alt="egg" />
                </picture>
                <section className="section-info">
                    <h1 className="info-heading">Stand out to the right audience</h1>
                    <p className="section-info-desc">
                        Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
                        we'll build and extend your brand in digital places.
                    </p>
                    <a href="#" className='standout-info-link'>LEARN MORE</a>
                </section>
            </section>
            <section className="final-content-section">
                <section className="section-gfxdesign">
                    <section className="gfxdesign-info">
                        <h1 className="info-heading-special">Graphic Design</h1>
                        <p className="gfxdesign-info-desc">
                            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
                        </p>
                    </section>
                </section>
                <section className="section-photography">
                    <section className="photography-info">
                        <h1 className="info-heading-special">Photography</h1>
                        <p className="photography-info-desc">
                            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                        </p>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Content;