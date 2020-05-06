import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import userDropdown from "./userDropdown";
import Results from "./Results";

const Searchparams = () => {
  //const location = "Seattle, WA";
  const [location, setlocation] = useState("Seattle, WA");
  //const [animal, setanimal] = useState("dog");
  //const [breed, setbreed] = useState("Retreiver");
  const [breeds, setbreeds] = useState([]);
  const [Animal, AnimalDropdown] = userDropdown("Animal", "Dog", ANIMALS);
  const [breed, Breeddropdown, setbreed] = userDropdown("Breed", "", breeds);
  const [pets, setpets] = useState([]);

  async function requestpets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: Animal,
    });
    setpets(animals || []);
  }

  useEffect(() => {
    //pet.breeds("dog").then(console.log(), console.error());
    setbreeds([]);
    setbreed("");

    pet.breeds(Animal).then(({ breeds }) => {
      const breedstring = breeds.map(({ name }) => name);
      setbreeds(breedstring);
    }, console.error);
  }, [Animal, setbreed, setbreeds]);

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestpets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={(e) => setlocation(e.target.value)}
          />
        </label>
        {/* <label htmlFor="animal"> 
                Animal
                      <select id="animal" 
                      value={animal}
                      onChange = {e =>  setanimal(e.target.value)} 
                      onBlur = {e => setanimal(e.target.value)}> 
                        <option>All</option>
                        {ANIMALS.map(animal => (<option key={animal} value={animal}>{animal}</option>))}
                      </select>

                </label> 

                <label htmlFor="breed">
                    breed
                    <select id="breed" value={breed}
                    onChange = {e => setbreed(e.target.values)}
                    onBlur = {e => setbreed(e.target.value)}
                    disabled= {breeds.length === 0}>
                        <option>
                            All
                        </option>
                        {breeds.map(breedstring => <option key={breedstring} value={breedstring} >{breedstring}</option>)}
                    </select>
                </label> */}
        <AnimalDropdown />
        <Breeddropdown />

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default Searchparams;
