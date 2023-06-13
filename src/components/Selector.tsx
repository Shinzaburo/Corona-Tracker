import { Selectortype } from "../types";

const Selector = ({ setCountry, countriesJson } : Selectortype ) => {
    return (
        <div className="selector-container">
            <select onChange={(e) => setCountry(e.target.value)}>
                {countriesJson.map((country, index) => 
                    <option key={index} value={country.Slug}>{country.Country}</option>
                )}
            </select>
        </div>
    );
};

export default Selector;