import React, { useEffect, useState } from "react";
import axios from "axios";
import "./flags.css";

const Title = ({ flagUrl, name, altflag }) => {
  return (
    <div className="imgbox">
      <img src={flagUrl} alt={altflag} className="img" />
      <h2>{name}</h2>
    </div>
  );
};
export default function Flags() {
  const [countries, setCountries] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  console.log({ countries });

  return (
    <div className="maindiv">
      {countries.map((country) => (
        <Title
        key={country.cca3}
          flagUrl={country.flags.png}
          name={country.name.common}
          altflag={country.flags.alt}
        />
      ))}
    </div>
  );
}
