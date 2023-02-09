import { Header, ImgHeader } from "../Home/styled";
import pokeLogo from "../../assets/pokelogo.png";
import pokebola from "../../assets/pokebola.png";
import { goTo } from "../../routes/coordinator";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  DetailsPokemon,
  MovesDetails,
  PhotoDetails,
  StatsDetails,
  StatsImg,
  StatsInfo,
  TypesBackground,
} from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
const Characteristic = () => {
  const navigate = useNavigate();
  const pathParams = useParams();

  const [pokemonCaracter, setPokemonCaracter] = useState({
    type: "",
    spritesFront: "",
    spritesBack: "",
    stats: [],
    id:"",
    name:"",
    types:[],
    moves:[]
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${pathParams.id}/`)
      .then((res) => {
        console.log("RES DATA", res.data);
        setPokemonCaracter({
          type: res.data?.types[0]?.type.name,
          spritesFront: res.data?.sprites.front_default,
          spritesBack: res.data?.sprites.back_default,
          stats: res.data?.stats,
          oficialArtWork:res.data?.sprites.other["official-artwork"].front_default,
          id: res.data.id,
          name: res.data?.name,
          types:res.data.types,
          moves:res.data?.moves
        });
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <Header>
        <ImgHeader src={pokeLogo} onClick={() => goTo(navigate, "/")} />
      </Header>
      <Container>
        <img id="backgroundPokebola" src={pokebola} alt="pokebola" />
        <h1>Detalhes</h1>
        <DetailsPokemon type={pokemonCaracter.type}>
          <StatsImg>
            <div id="front">
              <img src={pokemonCaracter.spritesFront} />
            </div>
            <div id="back">
              <img src={pokemonCaracter.spritesBack} />
            </div>
          </StatsImg>
          <StatsDetails>
            <h3>Base stats</h3>
            {pokemonCaracter.stats.map((element, index) => {
              return (
                <div key={index}>
                  <p>{`${element.stat.name}: ${element.base_stat}`} </p>
                  <progress value={element.base_stat} max={"100"} />
                </div>
              );
            })}
            <h4>{`Total Pontos: ${pokemonCaracter.stats.reduce(
              (elemAnt, eleAtu) => elemAnt + eleAtu.base_stat,
              0
            )}`}</h4>
          </StatsDetails>
          <StatsInfo>
            <p>{`#${pokemonCaracter.id}`}</p>
            <h1>{`${pokemonCaracter.name.toUpperCase()}`}</h1>
            <div id="types">
              {pokemonCaracter.types.map((type) => (
                <TypesBackground type={type.type.name}>
                  {type.type.name}
                </TypesBackground>
              ))}
            </div>
            <MovesDetails>
              <h3>Moves:</h3>
              {pokemonCaracter.moves?.slice(0, 4).map((elem) => (
                <p>{elem.move.name}</p>
              ))}
            </MovesDetails>
          </StatsInfo>
          <PhotoDetails>
            <img src={pokemonCaracter.oficialArtWork} alt={"pokemonDetails"} />
          </PhotoDetails>
        </DetailsPokemon>
      </Container>
    </div>
  );
};

export default Characteristic;
