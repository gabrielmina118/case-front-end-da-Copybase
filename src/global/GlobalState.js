import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/urls";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;

  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/?offset=${pagina}&limit=30`
      );
      setPokemons(response.data.results);
      setRemoveLoading(true);
    } catch (erro) {
      console.log("Erro", erro);
    }
  };

  const botao1 = () => {
    setPagina(0);
  };

  const botao2 = () => {
    setPagina(30);
  };

  const botao3 = () => {
    setPagina(60);
  };

  const botao4 = () => {
    setPagina(90);
  };

  const funcoes = { botao1, botao2, botao3, botao4 };
  const values = {
    pokemons,
    setPokedex,
    pokedex,
    removeLoading,
  };

  return <Provider value={{ values, funcoes }}>{props.children}</Provider>;
}
