// import Swiper core and required modules
import { Pagination, A11y, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss'

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {FC} from "react";
import {ISlide} from "../../../models/ISlide";


interface SliderProps {
  slides: ISlide[]
}

const Slider: FC<SliderProps> = ({slides}) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {
        slides.map((iteam, index) =>{
            return( 
            <SwiperSlide key={index}>
               <div className="swiper__iteam _ibg">
                  <img src={process.env.PUBLIC_URL + iteam.scr}
                       alt="SliderImage"
                       className='swiper__img'/>
               </div>
            </SwiperSlide>)
         })
      }
    </Swiper>
  );
};


export default Slider