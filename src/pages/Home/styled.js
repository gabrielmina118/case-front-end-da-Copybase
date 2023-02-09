import styled from "styled-components";
import { backgroundColors, typesColors } from "../../components/Colors/colors";

export const Header = styled.header`
  display: flex;
  height: 160px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const ImgHeader = styled.img`
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
  }
`;
export const MainContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
