import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from "react-icons/fi";

export function Header() {
    return (
        <Container>
            <div className="logo">
                <h1>RocketMovies</h1>
            </div>
            
            <Input type="text" placeholder="Pesquisar pelo título" icon={FiSearch} />
            

            <Profile>

                <div>
                    <strong>Felipe Machado</strong>
                    <button className='logout'>Sair</button>
                </div>

                <img src="https://github.com/Felipe572.png" alt="Foto do Usúario" />
            </Profile>

        </Container>
    );
}