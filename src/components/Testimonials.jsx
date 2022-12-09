import './Testimonials.css';
import emily from '../assets/images/image-emily.jpg';
import jennie from '../assets/images/image-jennie.jpg';
import thomas from '../assets/images/image-thomas.jpg';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1 className="testimonials-heading">CLIENT TESTIMONIALS</h1>
            <section className="testimonials-container">
                <div className="testimonials-item">
                    <img src={emily} alt="emily" className="testimonial-picture" />
                    <p className="testimonial-desc">
                        We put or trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                    </p>
                    <p className='testimonial-name'>Emily R.</p>
                    <p className='testimonial-signoff'>Marketing Director</p>
                </div>
                <div className="testimonials-item">
                    <img src={thomas} alt="thomas" className='testimonial-picture' />
                    <p className="testimonial-desc">
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience. 
                    </p>
                    <p className="testimonial-name">Thomas S.</p>
                    <p className="testimonial-signoff">Chief Operating Officer</p>
                </div>
                <div className="testimonials-item">
                    <img src={jennie} alt="jennie" className='testimonial-picture' />
                    <p className="testimonial-desc">
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                    </p>
                    <p className="testimonial-name">Jennie F.</p>
                    <p className="testimonial-signoff">Business Owner</p>
                </div>
            </section>
        </section>
    );
}

export default Testimonials;