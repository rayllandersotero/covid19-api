import { IData } from "../../";

import { MainUI, BlockUI } from "./styles";

function Board({ data }: { data: IData }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  return (
    <MainUI>
      <BlockUI color="purple">
        <h2>New cases</h2>
        <p>{cases || "Loading..."}</p>
      </BlockUI>

      <BlockUI color="green">
        <h2>New deaths</h2>
        <p>{deaths || "Loading..."}</p>
      </BlockUI>

      <BlockUI color="orange">
        <h2>Recovered</h2>
        <p>{recovered || "Loading..."}</p>
      </BlockUI>

      <BlockUI color="darkblue">
        <h2>Total cases</h2>
        <p>{todayCases || "Loading..."}</p>
      </BlockUI>

      <BlockUI color="pink">
        <h2>Total deaths</h2>
        <p>{todayDeaths || "Loading..."}</p>
      </BlockUI>
    </MainUI>
  );
}

export default Board;
