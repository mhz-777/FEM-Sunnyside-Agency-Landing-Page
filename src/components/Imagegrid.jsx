import './Imagegrid.css';
import mobileMilk from '../assets/mobile-images/image-gallery-milkbottles.jpg';
import desktopMilk from '../assets/desktop-images/image-gallery-milkbottles.jpg';
import mobileOrange from '../assets/mobile-images/image-gallery-orange.jpg';
import desktopOrange from '../assets/desktop-images/image-gallery-orange.jpg';
import mobileCone from  '../assets/mobile-images/image-gallery-cone.jpg';
import desktopCone from  '../assets/desktop-images/image-gallery-cone.jpg';
import mobileCubes from  '../assets/mobile-images/image-gallery-sugar-cubes.jpg';
import desktopCubes from  '../assets/desktop-images/image-gallery-sugarcubes.jpg';

const Imagegrid = () => {
    return (
        <section className="imageGrid">
            <picture>
                <source media="(max-width: 500px)" srcSet={mobileMilk} />
                <source media="(min-width: 800px)" srcSet={desktopMilk} />
                <img src={mobileMilk} alt="milk" />
            </picture>
            <picture>
                <source media="(max-width: 500px)" srcSet={mobileOrange} />
                <source media="(min-width: 800px)" srcSet={desktopOrange} />
                <img src={mobileOrange} alt="orange" />
            </picture>
            <picture>
                <source media="(max-width: 500px)" srcSet={mobileCone} />
                <source media="(min-width: 800px)" srcSet={desktopCone} />
                <img src={mobileCone} alt="cone" />
            </picture>
            <picture>
                <source media="(max-width: 500px)" srcSet={mobileCubes} />
                <source media="(min-width: 800px)" srcSet={desktopCubes} />
                <img src={mobileCubes} alt="cubes" />
            </picture>
        </section>
    );
}

export default Imagegrid;