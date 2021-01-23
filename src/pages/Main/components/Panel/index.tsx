import Select from "react-select";

import countries from "../../../../commons/resources/countries";

import { HeaderUI, InfoUI, SelectDivUI, LabelUI } from "./styles";

interface IPanel {
  loading: boolean;
  country: string;
  updatedAt: Date;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
}

interface ILabel {
  label: string;
  flag: string;
}

function Panel({ loading, country, updatedAt, onSelect }: IPanel) {
  const Label = ({ label, flag }: ILabel) => (
    <LabelUI>
      <img src={flag} alt={label} /> {label}
    </LabelUI>
  );

  const getOptions = () => {
    return countries.map(({ label, value, flag }) => ({
      value,
      label: <Label label={label} flag={flag} />,
    }));
  };

  const getDefaltOption = () => {
    const option = countries.find((c) => c.value === country);

    if (!option) return undefined;

    return {
      value: option.value,
      label: <Label label={option.label} flag={option.flag} />,
    };
  };

  return (
    <HeaderUI>
      <div>
        <h1>COVID 19</h1>
      </div>

      <InfoUI>
        <SelectDivUI>
          <Select
            options={getOptions()}
            onChange={(e) => onSelect(e!.value)}
            defaultValue={getDefaltOption()}
            isDisabled={loading}
          />
        </SelectDivUI>

        <div>
          <p>
            Updated at: <strong>{updatedAt.toLocaleDateString()}</strong>
          </p>
        </div>
      </InfoUI>
    </HeaderUI>
  );
}

export default Panel;
