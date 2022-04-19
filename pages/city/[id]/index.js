import { VideoProps } from "../../../src/styles/GlobalStyles.styled";
import Clock from "react-live-clock";
import { useEffect, useState } from "react";
import { Chart } from "../../../src/components/Chart";
import Link from "next/link";
import moment from "moment";
import {
  CityChange,
  Container,
  Controls,
  HourCityContainer,
  SBCity,
  SideBar,
  VideoContainer,
  Weather,
  WeatherDetails,
  FramerSideBar,
  FramerVideoContainer,
  NextDays,
} from "../../../src/styles/City.styled";

export async function getServerSideProps({ query }) {
  const { id } = query;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${id}&appid=e973382835b801d059623a8402dda9c8`
  );

  const data = await res.json();

  return {
    props: { data },
  };
}

export default function City({ data }) {
  //CURRENT WEATHER DATAg
  const { list, city } = data;
  const [currentWeatherData, ...rest] = list;
  const { main, weather } = currentWeatherData;
  const mainWeather = weather[0].main.toLowerCase();
  const [isSSR, setIsSSR] = useState(false);
  useEffect(() => {
    setIsSSR(true);
  }, []);

  //RESOLVERS
  const resolveTemperature = (day, data) => {
    const currentDay = moment().format("YYYY-MM-DD");
    const forecastedDay = moment().add(day, "days").format("YYYY-MM-DD");

    const theDay = list.find(
      (item) => item.dt_txt.split(" ")[0] === forecastedDay
    );

    return Math.round(theDay.main.temp - 272);
  };

  const resolveWeatherHeading = (weather) => {
    if (weather === "Clear") return "It's a clear day";

    if (weather === "Clouds") return "It's a cloudy day";

    if (weather === "Snow") return "It's a snowy day";

    if (weather === "Rain") return "It's a rainy day";

    if (weather === "Thunderstorm") return "There is thunder!";

    if (weather === "Mist") return "It's Misty!";
  };

  const resolveSuggestion = (weather) => {
    if (weather === "Clear") return "Put sunscreen on!";

    if (weather === "Clouds") return "You may feel restless...";

    if (weather === "Snow") return "Put your coat on!";

    if (weather === "Rain") return "Get your umbrella.";

    if (weather === "Thunderstorm") return "It's better to stay home...";

    if (weather === "Mist") return "Distant may seem invisible";
  };

  //RESOLVERS

  console.log(weather[0].main);

  return (
    <>
      {data && (
        <Container>
          <VideoContainer {...FramerVideoContainer}>
            <video {...VideoProps}>
              <source src={`/${mainWeather}.mp4`} />
            </video>

            <Controls>
              <Weather>
                <h1> {Math.floor(main.temp - 272)}°</h1>
                <div>
                  <span> {resolveWeatherHeading(weather[0].main)} </span>
                  <span> {resolveSuggestion(weather[0].main)}</span>
                </div>
              </Weather>
              <HourCityContainer>
                {isSSR && (
                  <span>
                    <Clock
                      format={"h:mm:ssa"}
                      style={{ fontSize: "1.5rem" }}
                      ticking={true}
                    />
                  </span>
                )}
                <CityChange>
                  <span> {city.name}</span>
                  <Link href="/">
                    <button>change</button>
                  </Link>
                </CityChange>
              </HourCityContainer>
            </Controls>
          </VideoContainer>

          <SideBar {...FramerSideBar}>
            <SBCity>
              <span>
                <span>City</span> {city.name}
              </span>
              <Link href="/">
                <button>change</button>
              </Link>
            </SBCity>

            <WeatherDetails>
              <h1>Weather Details</h1>
              <div>
                <span>Humidity</span>
                <span> 25% </span>
              </div>
              <div>
                <span>Wind</span>
                <span> {currentWeatherData.wind.speed} m/s </span>
              </div>
              <div>
                <span>Cloudiness</span>
                <span> {currentWeatherData.clouds.all} %</span>
              </div>
              <div>
                <span>Pressure</span>
                <span> {main.pressure} MB</span>
              </div>
            </WeatherDetails>
            <Chart list={list} />
            <WeatherDetails>
              <h1>Next Days</h1>
              <div>
                <span>{moment().format("dddd")}</span>
                <span> {resolveTemperature(1, list)} °C </span>
              </div>
              <div>
                <span>{moment().add(1, "days").format("dddd")}</span>
                <span> {resolveTemperature(2, list)} °C</span>
              </div>
              <div>
                <span>{moment().add(2, "days").format("dddd")}</span>
                <span> {resolveTemperature(3, list)} °C</span>
              </div>
              <div>
                <span>{moment().add(3, "days").format("dddd")}</span>
                <span> {resolveTemperature(4, list)} °C </span>
              </div>
            </WeatherDetails>
          </SideBar>
        </Container>
      )}
    </>
  );
}
