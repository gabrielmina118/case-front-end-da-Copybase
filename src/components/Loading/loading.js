import React from "react";
import pokeLoading from "../../assets/loadingPokebola.gif";
import { LoadingImg } from "./styled";

function Loading() {
  return (
    <div>
      <LoadingImg src={pokeLoading} alt={"loading"} />
    </div>
  );
}
export default Loading;

