import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from 'react-router-dom'
import Four from '../../assets/hp_m_petstore_251122_400.webp';
import Three from '../../assets/hp_bcd_m_bcd_251122_400.webp';
import First from '../../assets/hp_m_health_suppliment_251122_400.webp';
import Five from '../../assets/hp_m_babycare_251122_400.webp';

const slider = [
    {
        image: First
    },
    {
        image: Three
    },
    {
        image: Four
    },
    {
        image: Five
    },
]


function BottomCarousel() {
    return (
        <div className='maindivhai'>
        <Link to="/products">    <Carousel autoPlay infiniteLoop showArrows showIndicators>

                {slider.map((el) => {
                    return <img src={el.image} alt="additional-image" height='100%' width='90%' />
                })}

            </Carousel>

        </Link>
        </div>
    )
}

export default BottomCarousel