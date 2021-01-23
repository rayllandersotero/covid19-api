import brazilFlag from "../../assets/images/brazil.webp";
import chinaFlag from "../../assets/images/china.webp";
import italyFlag from "../../assets/images/italy.webp";
import germanyFlag from "../../assets/images/germany.webp";

interface ICountries {
  label: string;
  flag: string;
  value: string;
}

const coutries: ICountries[] = [
  { label: "Brazil", value: "brazil", flag: brazilFlag },
  { label: "China", value: "China", flag: chinaFlag },
  { label: "Italy", value: "Italy", flag: italyFlag },
  { label: "Germany", value: "Germany", flag: germanyFlag },
];

export default coutries;
