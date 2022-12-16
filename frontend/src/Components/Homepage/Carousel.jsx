import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Four from '../../assests/Cp_m_GM_EPBanner_460-051222.webp';
import Three from '../../assests/HP_EMF_M_WeekdayBangalore-1600x460-221212.webp';
import First from '../../assests/hp_m_Dairy_460px-011222.webp';
import Five from '../../assests/hp_m_GOURMETPL_SnackswithNoLimits_460px-011222.webp';
import Six from '../../assests/YXHP144_hp_fom_m_bbpl-staples_460_121222_Bangalore.webp';

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
    {
        image: Six
    }
]


function Slider() {
    return (
        <div className='maindivhai'>
            <Carousel autoPlay infiniteLoop showArrows showIndicators>

                {slider.map((el) => {
                    return <img src={el.image} alt="additional-image" height='100%' width='90%' />
                })}

            </Carousel>


        </div>
    )
}

export default Slider