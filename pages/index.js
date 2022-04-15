import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "../styles/İndex.styled";

export default function Home() {
  const [currentLoc, setCurrentLoc] = useState("");
  const [randomLoc, setRandomLoc] = useState("");
  const apiKey = "00b976e91b2b6e21b881af1759eb0249";
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, error);
  //   function success(position) {
  //     let lat = position.coords.latitude;
  //     let lon = position.coords.longitude;
  //     FetchCurrentLocation(lat, lon);
  //   }
  //   function error(position) {
  //     console.log("error");
  //   }

  //   async function FetchCurrentLocation(lat, lon) {
  //     const ress = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  //     );
  //     const data = await ress.json();
  //     setCurrentLoc(data);
  //   }
  // }, []);

  // useEffect(() => {
  //   async function FetchRandomLocation() {
  //     const ress = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${51.607783}&lon=${21.348024}&appid=${apiKey}`
  //     );
  //     const data = await ress.json();
  //     setRandomLoc(data);
  //   }
  //   FetchRandomLocation();
  // }, []);

  // console.log(randomLoc);

  return <Container>s</Container>;
}
