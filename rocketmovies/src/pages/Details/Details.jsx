import { FiPlus } from "react-icons/fi";

import { Container, NewMovie } from "./styles";

import { Header } from "../../components/Header";

export default function Details(){
  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Meus Filmes</h1>

          <NewMovie>
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </header>

      </main>

      
    </Container>
  );
}