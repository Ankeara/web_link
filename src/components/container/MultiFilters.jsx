import { useEffect, useState } from "react";
import { items } from "./items";
import "./style.css";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchQuery, setSearchQuery] = useState("");

  let filters = ["AI", "Avatar", "Code", "Color", "Database", "Design", "Icon", "Library", "Mockup", "Picture", "Template"];
  
  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      const filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters, searchQuery]);

  const filterItems = () => {
    let tempItems = items;

    // Filter by selected categories
    if (selectedFilters.length > 0) {
      tempItems = tempItems.filter((item) => selectedFilters.includes(item.category));
    }

    // Further filter by search query
    if (searchQuery) {
      tempItems = tempItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(tempItems);
  };

  const truncateName = (name) => {
    return name.length > 13 ? name.substring(0, 13) + "..." : name;
  };

  return (
    <div>
      {/* Search Input */}
      <div className="flex justify-center items-center mt-2 mb-5 w-full max-w-md"> 
        <input
          id="search"
          name="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:green-300 sm:text-sm sm:leading-6"
        />
        <label htmlFor="search" className="block text-sm font-medium text-gray-900 mb-1">
          Search here
        </label>
      </div>

      <div className="buttons-container mb-5">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${selectedFilters.includes(category) ? "active" : ""}`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt="" />
            </a>
            <div className="detail flex flex-col">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="name">
                {truncateName(item.name)}
                <span className="popup">{item.name}</span>
              </a>
              <p className="category">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
