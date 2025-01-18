import { FiPlus } from "react-icons/fi";

import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export default function Details(){
  return (
    <Container>
      <Header />

      <FiPlus />
      <Button  title="Adicionar filme"/>

      
    </Container>
  );
}