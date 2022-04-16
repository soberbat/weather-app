import { useRef } from "react";
import { resolveIcon } from "../styles/GlobalStyles.styled";
import {
  NavigatePrev,
  NavigateNext,
  SwiperContainer,
} from "../styles/WeatherAroundTheWorld.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { LeftArrow, RightArrow } from "../styles/GlobalStyles.styled";
import { SliderContainer, Where, Heat, City } from "../styles/Slider.styled";
export const Slider = ({ randomLocations }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SwiperContainer>
      <Swiper
        breakpoints={{
          780: {
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={100}
        navigation={
          (true,
          {
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          })
        }
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation]}
      >
        {randomLocations.map((item) => {
          let source = resolveIcon(item.weather[0].main);
          return (
            <SwiperSlide>
              <SliderContainer>
                <img src={`/${source}`} alt="" />
                <Where>
                  <span> {item.weather[0].main} </span>
                  <Heat>
                    {Math.floor(item.main.temp - 270)} <span>°C </span>
                  </Heat>
                </Where>
              </SliderContainer>
              <City> {item.name} </City>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <NavigatePrev ref={navigationPrevRef}> {LeftArrow} </NavigatePrev>
      <NavigateNext ref={navigationNextRef}> {RightArrow} </NavigateNext>
    </SwiperContainer>
  );
};
