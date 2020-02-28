import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const searchParams = () => {
  const [location, setLocation] = useState(" washington DC");
  const [animal, setAnimal] = useState("dog");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          ></input>
        </label>
        <label htmlFor="animal">
          Location
          <input
            id="animal"
            value={animal}
            placeholder="animal"
            onChange={e => setAnimal(e.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default searchParams;
