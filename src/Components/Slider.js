import React, { useState, useEffect, useCallback } from "react";
import SliderItems from "./SliderItems";
import api from "../Providers/Api";
import { TfiAngleDown } from "react-icons/tfi";

const Slider = () => {
  const charactersUrl = "/characters";

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get(charactersUrl)
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(characters);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get("characters", {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

  let slideItemsLoop = [];

  for (let i = 0; i < characters.length; i++) {
    slideItemsLoop.push({
      name: characters[i].name,
      image: `${characters[i].thumbnail.path}.${characters[i].thumbnail.extension}`,
      description: characters[i].description,
    });
  }

  return (
    <div className="slider">
      <div className="slider--width">
        <div className="slider--item">
          {slideItemsLoop.map((item) => (
            <SliderItems
              key={item.name}
              title={item.name}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <button onClick={handleMore}>
        Carregar Mais{" "}
        <span>
          <TfiAngleDown />
        </span>
      </button>
    </div>
  );
};

export default Slider;
