import {
  Busca,
  ButtonPokemon,
  ButtonDetalhes,
  PaginacaoPokemon,
  CardPokemon,
  Container,
  Header,
  ButtonPokemonPaginado,
  ImageAndCapture,
  ImgHeader,
  MainContainer,
  NameType,
  PokemonImg,
  PokemonTypes,
  Ptypes,
} from "./styled";
import pokeLogo from "../../assets/pokelogo.png";
import pokebola from "../../assets/pokebola.png";
import { goTo } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import Loading from "../../components/Loading/loading";

const Home = () => {
  const navigate = useNavigate();
  const { values } = useContext(GlobalContext);
  const [nome, setNome] = useState("");

  const cardPokemons = values.pokemons
    .filter((pokemon) => (nome ? pokemon.name.toLowerCase().includes(nome.toLowerCase()) : true))
    .map((pokemon, index) => {
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
              onClick={() => goTo(navigate, `/characteristic/${pokemon.id}`)}
            >
              Caracteristicas
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
            <ButtonPokemon id="capturar" onClick={() => goTo(navigate, `/detail/${pokemon.name}`)}>Detalhes!</ButtonPokemon>
          </ImageAndCapture>
        </CardPokemon>
      );
    });

  return (
    <div>
      <Header>
        <ImgHeader src={pokeLogo} onClick={() => goTo(navigate, "/")} />
      </Header>
      <Container>
        <Busca>
          <h1>Todos os Pokémons</h1>
          <div>
            <label>Pesquisa de pokemon</label>
            <input
              placeholder="Nome pokemon..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </Busca>
        <MainContainer>
          {!values.removeLoading && <Loading />}
          {cardPokemons}
        </MainContainer>
      </Container>
      <PaginacaoPokemon>
        <ButtonPokemonPaginado onClick={()=>values.setPagina(values.pagina +  20)}> Busca Mais pokemons</ButtonPokemonPaginado>
      </PaginacaoPokemon>
    </div>
  );
};

export default Home;
