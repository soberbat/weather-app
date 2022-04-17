import Link from "next/link";
import { useEffect, useState } from "react";
import { CurrentCity } from "../src/components/CurrentCity";
import { WeatherAroundTheWorld } from "../src/components/WeatherAroundTheWorld";
import { Container, Inner } from "../src/styles/İndex.styled.js";
import { apiKey } from "../src/styles/GlobalStyles.styled";
import { Search } from "../src/components/Search";

export default function Home() {
  const [currentLoc, setCurrentLoc] = useState("");

  // GET USER' CURRENT LOCATİON AND FETCH DATA
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      FetchCurrentLocation(lat, lon);
    }

    function error(position) {
      console.log("error");
    }

    async function FetchCurrentLocation(lat, lon) {
      const ress = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );

      const data = await ress.json();
      setCurrentLoc(data);
    }
  }, []);
  // GET USER' CURRENT LOCATİON AND FETCH DATA

  console.log(currentLoc);
  return (
    <Container>
      <Inner>
        <Search />
        {currentLoc && <CurrentCity data={currentLoc} />}
        <WeatherAroundTheWorld />
      </Inner>
    </Container>
  );
}
