import { useEffect, useState } from "react";
import { apiKey } from "../styles/GlobalStyles.styled";

import {
  Container,
  Heading,
  SwiperProps,
} from "../styles/WeatherAroundTheWorld.styled";
import { Slider } from "./SliderItem";

export const WeatherAroundTheWorld = () => {
  const [randomLocations, setRandomLocations] = useState([]);

  useEffect(() => {
    const endPoints = {
      Bonne: `https://api.openweathermap.org/data/2.5/weather?lat=${51.607783}&lon=${21.348024}&appid=${apiKey}`,
      Seville: `https://api.openweathermap.org/data/2.5/weather?lat=${37.392529}&lon=${-5.994072}&appid=${apiKey}`,
      Singapore: `https://api.openweathermap.org/data/2.5/weather?lat=${1.29027}&lon=${103.851959}&appid=${apiKey}`,
      Shanghai: `https://api.openweathermap.org/data/2.5/weather?lat=${31.224361}&lon=${121.46917}&appid=${apiKey}`,
      NewYork: `https://api.openweathermap.org/data/2.5/weather?lat=${40.73061}&lon=${-73.935242}&appid=${apiKey}`,
      Canberra: `https://api.openweathermap.org/data/2.5/weather?lat=${-35.282001}&lon=${149.128998}&appid=${apiKey}`,
    };
    Promise.all(
      Object.entries(endPoints).map(([propertyName, url]) =>
        fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setRandomLocations((prev) => {
              return [...prev, result];
            });
          })
      )
    );
  }, []);

  return (
    <>
      {randomLocations && (
        <Container {...SwiperProps}>
          <Heading>
            <h1>What's the Weather ? </h1>
            <span>
              See What's the weather like in the most popular cities around the
              globe!
            </span>
          </Heading>
          <Slider randomLocations={randomLocations} />
        </Container>
      )}
    </>
  );
};
