import { useEffect, useCallback, useState } from "react";
import axios from "axios";

import Panel from "./components/Panel";
import Board from "./components/Board";

export interface IData {
  cases: string | number;
  todayDeaths: string | number;
  recovered: string | number;
  deaths: string | number;
  todayCases: string | number;
}

function Main() {
  const [country, setCountry] = useState("brazil");
  const [covidData, setCovidData] = useState({} as IData);
  const [updatedAt, setUpdatedAt] = useState(new Date());
  const [loading, setLoading] = useState(true);

  const getCountryData = useCallback(async (country, cancelToken) => {
    setLoading(true);

    const path = "https://disease.sh/v3/covid-19/countries";

    try {
      const { data } = await axios.get<IData>(`${path}/${country}`, {
        cancelToken,
      });

      if (!data) throw new Error("Servers off, please try again later");

      setCovidData(data);
      setUpdatedAt(new Date());
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    getCountryData(country, cancelTokenSource.token);

    return () => {
      cancelTokenSource.cancel();
    };
  }, [getCountryData, country]);

  return (
    <>
      <Panel
        loading={loading}
        country={country}
        updatedAt={updatedAt}
        onSelect={setCountry}
      />
      <Board data={covidData} />
    </>
  );
}

export default Main;
