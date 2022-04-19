import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
      margin: 0;
      padding: 0;

      font-family: 'Akshar', sans-serif;
    }

    .video{
      object-fit: cover;
    }

    *{
      box-sizing: border-box;
    }


    .swiper {
    width: 100%;
    height: 100%;

  
    }



    .swiper-button-next { color: red; }

        .swiper-button-next {
          background-image: url(./next.svg);
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-position: center;
        }

    .swiper-button-next::after {
        display: none;
      }

    .swiper-slide {
      text-align: center;
      border-radius: 15px;
      font-size: 18px;
      background: ${({ theme }) => theme.grayDark};
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      height: 250px;
      gap: 2rem;
      color: ${({ theme }) => theme.grayTextTone};



      border: 2px solid black;
    }



  
  .image-container {
    width: 100%;
    

    > div {
      position: unset !important;
      width: 25px;
    }
    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }


  @media (max-width: 768px) {

    html{
      font-size: 10px;
    }
  }
`;

export const theme = {
  black: "#191919",
  white: "#ffffff",
  blue: "#5490ee",
  gray: "#5f5f5f",
  grayLight: "#898989",
  grayTextTone: "#EBEBEB",
  grayDark: "#3c3c3c",
  grayDarkest: "#2b2b2b",
  indigo: "#4b4bf5",
  indigoLight: "#847cfc",
  indigoDark: "#4b4bf5",
  indigoDarkest: "#1c185b",
};

export const LeftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    class="bi bi-arrow-left-short"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
    />
  </svg>
);

export const RightArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    class="bi bi-arrow-right-short"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
    />
  </svg>
);

export const apiKey = "00b976e91b2b6e21b881af1759eb0249";

export const resolveIcon = (condition) => {
  if (condition === "Clear") {
    return "clear.png";
  }
  if (condition === "Clouds") {
    return "cloudy.png";
  }
  if (condition === "Snow") {
    return "snow.png";
  }
  if (condition === "Rain") {
    return "rainy.png";
  }

  if (condition === "Mist") {
    return "mist.png";
  }
  if (condition === "Thunderstorm") return "thunder.png";
};

export const VideoProps = {
  className: "video",
  loop: true,
  muted: true,
  autoPlay: true,
  style: {
    width: "100%",
    height: "100%",
  },
};
