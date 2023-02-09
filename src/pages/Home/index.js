import {
  ButtonHeader,
  ButtonHeaderContainer,
  Container,
  Header,
  ImgHeader,
  MainContainer,
  TextHeaderContainer,
} from "./styled";
import pokeLogo from "../../assets/pokelogo.png";
import { goTo } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {GlobalContext} from "../../global/GlobalContext"

const Home = () => {
  const navigate = useNavigate();
  const {  values, funcoes } =useContext(GlobalContext);

  return (
    <div>
      <Header>
        <ImgHeader src={pokeLogo} />
        <ButtonHeaderContainer>
          <ButtonHeader onClick={() => goTo(navigate, "/pokedex")}>
            Pokédex
          </ButtonHeader>
        </ButtonHeaderContainer>
      </Header>
      <Container>
        <h1>Todos os Pokémons</h1>
        <MainContainer>
        {!values.removeLoading && <Loading />}
        </MainContainer>
      </Container>
    </div>
  );
};

export default Home;
