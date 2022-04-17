import { VideoProps } from "../../../src/styles/GlobalStyles.styled";

import {
  Container,
  Controls,
  SideBar,
  VideoContainer,
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
  const { list, city } = data;

  console.log(list);

  return (
    <Container>
      <VideoContainer>
        <video {...VideoProps}>
          <source src="/rain.mp4" />
        </video>
        <Controls></Controls>
      </VideoContainer>
      <SideBar>a</SideBar>
    </Container>
  );
}
