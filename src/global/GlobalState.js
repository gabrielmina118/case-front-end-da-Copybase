import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/urls";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsByName, setPokemonsByName] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [pagina, setPagina] = useState(20);

  useEffect(() => {
    getPokemonsById();
  }, [pagina]);

  const getPokemonsById = async () => {
    try {
      // Criar um array de 1 até 20
      const arrayNumber = Array.from({ length: pagina }, (_, index) => ++index);
      // Buscar os pokemons ja com as informações de cada um na url => https://pokeapi.co/api/v2/pokemon/numberpok
      const pokemonsAll = arrayNumber.map(async (numberpok) => {
        const res = await axios.get(`${BASE_URL}/${numberpok}/`);
        return res.data;
      });
      const resolvedPokemons = await Promise.all(pokemonsAll);
      setPokemons(resolvedPokemons);
      setRemoveLoading(true);
    } catch (erro) {
      alert("Erro", erro);
    }
  };

  const getPokemonsByName = async (names) => {
    try {
     const pokemonsAll = names.map(async (name) => {
        const res = await axios.get(`${BASE_URL}/${name}/`);
        return res.data;
      });
      const resolvedPokemons = await Promise.all(pokemonsAll);
      setPokemonsByName(resolvedPokemons);
    } catch (erro) {
      alert("Erro", erro);
    }
  };

  const values = {
    pokemons,
    setPokedex,
    pokedex,
    removeLoading,
    setPagina,
    pagina,
    getPokemonsByName,
    pokemonsByName
  };

  return <Provider value={{ values }}>{props.children}</Provider>;
}
