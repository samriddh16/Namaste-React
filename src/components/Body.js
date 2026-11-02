import { restaurantList } from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filteredRestaurants(searchText) {
    const data = restaurantList.filter((restaurant) => {
        return restaurant.data.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
    });

    console.log(data);
    console.log(restaurantList);

    return data;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <>
            <div className="search-container">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                        onChange={(e) => {setSearchText(e.target.value)
                            const data = filteredRestaurants(searchText);
                            setRestaurants(data);
                        }}
                        value={searchText}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            const data = filteredRestaurants(searchText);
                            setRestaurants(data);
                        }}
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </>
    );
};

export default Body;