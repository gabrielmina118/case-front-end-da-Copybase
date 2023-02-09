import styled from "styled-components";
import { backgroundColors, typesColors } from "../../components/Colors/colors";


export const Header = styled.header`
  display: flex;
  height: 160px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const TextHeaderContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ImgHeader = styled.img`
  display: flex;
  margin-top: 21px;
  margin-bottom: 26px;
  width: 307px;
  height: 113px;
`;

export const ButtonHeaderContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHeader = styled.button`
  background-color: #33a4f5;
  color: white;
  font-weight: bold;
  font-size: 1.3em;
  width: 287px;
  height: 74px;
  margin-top: 41px;
  margin-bottom: 45px;
  border-radius: 8px;
  padding: 4px 10px 2px 10px;
  cursor: pointer;
  border: none;
  :active {
    background-color: #047fc3;
    transition: 0.3s;
  }
`;
export const Container = styled.div`
  background-color: #5d5d5d;
  h1 {
    color: #fff;
    margin-left: 40px;
    padding: 16px;
  }
`;
export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardPokemon = styled.div`
  width: 440px;
  height: 250px;
  margin: 16px auto;
  background-color: ${(props) => backgroundColors[props.type]};
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  color: #fff;
  #capturar{
   display: flex;
   align-items: center;
   justify-content: center;
  }
`;

export const PokemonImg = styled.div`
  position: relative;
  #backpoke {
    position: absolute;
    bottom: -90px;
    left: -15px;
  }
  img {
    width: 150px;
    position: absolute;
    bottom: -40px;
    left: 30px;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  gap: 8px;
`;
export const Ptypes = styled.p`
  background-color: ${(props) => typesColors[props.type]};
  border-radius: 8px;
  padding: 5px;
  font-size: 12px;
  border: 0.2px dashed #fff;
`;

export const NameType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ButtonDetalhes = styled.p`
  font-weight: bold;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ButtonCapturar = styled.button`
  width: 140px;
  height: 38px;
  border-radius: 8px;
  font-weight: bold;
  position: relative;
  cursor: pointer;
  :active {
    background-color: lightgray;
    transition: 0.3s;
  }
`;

export const ImageAndCapture = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;
