import React, { useState } from "react";
import "./styles.css";

const AllRest = {
  Burger: [
    {
      Title: "Leon Grill 🍔  ",
      Description:
        "Elegantly Decorated, Cozy Ambiance, Great Recommendations, Combos, Friendly Service, Worth the Money",
      Rating: `9/10`
    },
    {
      Title: "Church Street Social 🍔",
      Description:
        "Fairly Priced Food, Variety of Selection, Serving Style, Awesome Location, Great Hangout Place, Unique Ambience",
      Rating: `8.5/10`
    }
  ],
  Taco: [
    {
      Title: "Taco Bell 🌮",
      Description:
        "Cheerful and popular with the crowds, this restaurant has a handful of ‘krazzy’ sounding tacos.",
      Rating: `9/10`
    },

    {
      Title: "Social Taco🌮",
      Description:
        "Fairly Priced Food, Variety of Selection, Serving Style, Awesome Location, Great Hangout Place, Unique Ambience.",
      Rating: `8.5/10`
    }
  ],

  Doughnut: [
    {
      Title: "Dukin Donuts 🍩",
      Description:
        "Beautiful Place, Decor, Combo, Great Ambience, Location, Worth the Money",
      Rating: `9.5/10`
    },
    {
      Title: "Krispy Kreme🍩 ",
      Description:
        "Friendly Staff, Location, Prices, Packaging, Ambiance, Quantity",
      Rating: `9/10`
    }
  ]
};

const foodNames = Object.keys(AllRest);

export default function App() {
  const [restList, setRestList] = useState(AllRest.Doughnut);

  function foodClickHandler(food) {
    const series = AlRest[food];
    setRestList(series);
  }

  function getSeriesPost(series) {
    const title = series.Title;
    const desc = series.Description;
    const rating = series.Rating;
    const htmlOfList = (
      <li>
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="emoji">
          🥣
        </span>{" "}
        Browse Bengaluru by Food
      </h1>
      <p>Checkout the best restaurants in the town.</p>
      <div>
        {foodNames.map((food) => {
          return (
            <button
              key={food}
              className="btn"
              onClick={() => foodClickHandler(food)}
            >
              {food}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {restList.map((series) => {
          return getSeriesPost(series);
        })}
      </ul>
    </div>
  );
}
