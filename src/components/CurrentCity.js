import React from "react";
import { SwiperProps } from "../styles/WeatherAroundTheWorld.styled";

import {
  Boxes,
  CityDetails,
  Container,
  Details,
  ImageContainer,
  Weather,
  Location,
  Note,
  NoteProps,
} from "../styles/CurrentCity.styled";
import { resolveIcon } from "../styles/GlobalStyles.styled";

export const CurrentCity = ({ data }) => {
  const { weather, main, name, sys, clouds } = data;
  return (
    <>
      <Container {...SwiperProps}>
        <Weather>
          <ImageContainer>
            <img src={`/${resolveIcon(weather[0].main)}`} />
          </ImageContainer>

          <Details>
            <h1> {weather[0].main} </h1>
            <span>
              {Math.floor(main.temp - 270)} <span>°C </span>{" "}
            </span>
          </Details>
        </Weather>

        <CityDetails>
          <Location>
            <span>{name}</span>
            <span> {sys.country} </span>
          </Location>

          <Boxes>
            <div>
              <span>Humidity</span>
              <span> {main.humidity}</span>
            </div>

            <div>
              <span>Clouds</span>
              <span> {clouds.all}</span>
            </div>
          </Boxes>
        </CityDetails>
      </Container>

      <Note {...NoteProps}>* Your current location</Note>
    </>
  );
};
