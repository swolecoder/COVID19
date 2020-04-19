import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { getCountries } from "../../api";

function CountryPicker({ handleCountryChange }) {
  const [countries, setFetchCountries] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await getCountries();
      setFetchCountries(data);
    };
    fetchCountry();
  }, [setFetchCountries]);

  console.log(countries);
  return (
    <div>
      <FormControl>
        <NativeSelect
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="global">Global</option>
          {countries.map((d, i) => {
            return (
              <option key={i} value={d}>
                {d}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
