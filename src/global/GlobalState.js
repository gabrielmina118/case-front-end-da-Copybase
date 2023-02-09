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
      // Criar um array de 1 até 20
      const arrayNumber = Array.from({ length: 20 }, (_, index) => ++index)
      // Buscar os pokemons ja com as informações de cada um na url => https://pokeapi.co/api/v2/pokemon/numberpok
      const pokemonsAll = arrayNumber.map(async (numberpok) => {
        const res = await axios.get(`${BASE_URL}/${numberpok}/`);
        return res.data;
      });
      const resolvedPokemons = await Promise.all(pokemonsAll);
      setPokemons(resolvedPokemons);
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
