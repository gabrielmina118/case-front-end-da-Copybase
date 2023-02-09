import {
  ButtonCapturar,
  ButtonDetalhes,
  ButtonHeader,
  ButtonHeaderContainer,
  CardPokemon,
  Container,
  Header,
  ImageAndCapture,
  ImgHeader,
  MainContainer,
  NameType,
  PokemonImg,
  PokemonTypes,
  Ptypes,
  TextHeaderContainer,
} from "./styled";
import pokeLogo from "../../assets/pokelogo.png";
import pokebola from "../../assets/pokebola.png";
import { goTo } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import Loading from "../../components/Loading/loading";

const Home = () => {
  const navigate = useNavigate();
  const { values, funcoes } = useContext(GlobalContext);

  console.log(values.pokemons);

  const cardPokemons = values.pokemons.map((pokemon, index) => {
    return (
      <CardPokemon type={pokemon.types[0].type.name} key={pokemon.id}>
        <NameType>
          <div>
            <p>#{index + 1}</p>
            <h3>{pokemon.name.toUpperCase()}</h3>
          </div>
          <PokemonTypes>
            {pokemon.types.map((type) => {
              return (
                <Ptypes type={type.type.name} key={type.type.name}>
                  {type.type.name}
                </Ptypes>
              );
            })}
          </PokemonTypes>
          <ButtonDetalhes
            onClick={() => goTo(navigate, `/details/${pokemon.id}`)}
          >
            Detalhes
          </ButtonDetalhes>
        </NameType>
        <ImageAndCapture>
          <PokemonImg>
            <img id="backpoke" src={pokebola} alt="background pokemon" />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
          </PokemonImg>
          <ButtonCapturar id="capturar">Capturar!</ButtonCapturar>
        </ImageAndCapture>
      </CardPokemon>
    );
  });

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
          {cardPokemons}
        </MainContainer>
      </Container>
    </div>
  );
};

export default Home;
