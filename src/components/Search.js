import { useState } from "react";
import { useRouter } from "next/router";
import { SearchInput, Container, SubmitButton } from "../styles/Search.styled";

export const Search = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    router.push(`/city/${city}`);
  };
  return (
    <Container>
      <SearchInput value={city} onChange={handleChange} />
      <SubmitButton onClick={handleSubmit}> Search </SubmitButton>
    </Container>
  );
};
