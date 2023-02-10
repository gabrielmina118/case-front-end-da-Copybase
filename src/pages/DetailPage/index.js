import { useContext, useEffect } from "react";
import axios from "axios";
import {
  ButtonDetalhes,
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
} from "../Home/styled";
import { goTo } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import pokeLogo from "../../assets/pokelogo.png";
import { GlobalContext } from "../../global/GlobalContext";
import pokebola from "../../assets/pokebola.png";
import { BASE_URL } from "../../constants/urls";

const DetailPage = () => {
  const navigate = useNavigate();
 
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}-species/${params.name}`)
      .then((res) => {
        const url = res.data.evolution_chain.url;
        axios
          .get(url)
          .then((res) => {
            values.getPokemonsByName([
              params.name,
              res.data.chain.evolves_to[0].species.name,
              res.data.chain.evolves_to[0].evolves_to[0].species.name,
            ]);
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((err) => {
        alert(err);
      });
  }, [params.name]);


  const { values } = useContext(GlobalContext);

  const cardPokemons = values.pokemonsByName.map((pokemon, index) => {
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
              src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
              alt={pokemon.name}
            />
          </PokemonImg>
        </ImageAndCapture>
      </CardPokemon>
    );
  });

  return (
    <>
      <Header>
        <ImgHeader src={pokeLogo} onClick={() => goTo(navigate, "/")} />
      </Header>
      <Container>
        <MainContainer>{cardPokemons}</MainContainer>
      </Container>
    </>
  );
};

export default DetailPage;
