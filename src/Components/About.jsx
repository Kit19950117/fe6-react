import aboutImg from '../assets/Copilot_20260918_110704.png';
import Title from './Title';
const About = () => {
    return (
    <section className="section" id="about">
        <Title title="about" subTitle="us" />
        <div className="section-center about-center">
            <div className="about-img">
                <img src={aboutImg} alt="photo-1" className="about-photo"/>
            </div>
            <article className="about-info">
                <h3>explore the difference</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, magni.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eveniet.</p>
                <a href="#" className="btn" role="button">read more</a>
            </article>
        </div>
    </section>
    )
}

export default About