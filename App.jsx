import { useState } from "react";
import Wallpaper from "./Images/wallpaper.jpg";
import "./App.css";

function App() {
  const suggestions = [
    `Aayush`,
    "aavash",
    "aaa",
    "aaaaa",
    `aghaa`,
    `ahbjbj`,
    `auihinkajbjh`,
    `aaopan`,
    `aaljwjksw`,
    `Ram`,
    `pppppp`,
    `llllll`,
    `hjbjknk`,
    `ojpopj`,
    `kjnakjj`,
    `Shyam`,
    `Hari`,
    `Bibek`,
    `Chetan`,
    `Dhiraj`,
    `Eve`,
    `Fantus`,
    `Gaurav`,
    `Iris`,
    `Jackal`,
    `Kapil`,
    `Lampard`,
    `Modric`,
    `Nabin`,
    `Oasis`,
    `Pukar`,
    `Qatar`,
    `Raju`,
    `Sabin`,
    `Tina`,
    `Urusha`,
    `Vivek`,
    `Xoami`,
    `Yutal`,
    `Zebra`,
  ];

  const [searchName, setSearchName] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1); // Track the selected suggestion index

  const handleSearch = (e) => {
    setSearchName(e.target.value);
  };

  const filterSuggestions = () => {
    if (searchName.trim() === "") {
      return [];
    }

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(searchName.toLowerCase())
    );

    return filtered;
  };

  const renderSuggestions = () => {
    const filteredSuggestions = filterSuggestions();

    return filteredSuggestions.map((suggestion, index) => (
      <li
        key={index}
        onClick={() => handleSelectSuggestion(suggestion)}
        className={index === selectedSuggestionIndex ? "selected" : ""} // Add 'selected' class for the selected suggestion
      >
        {suggestion}
      </li>
    ));
  };

  const handleSelectSuggestion = (suggestion) => {
    console.log("Selected suggestion:", suggestion);
    setSearchName(suggestion);
    setSelectedSuggestionIndex(-1); // Reset the selected suggestion index
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (selectedSuggestionIndex !== -1) {
        // If a suggestion is selected using the cursor, select it
        handleSelectSuggestion(filterSuggestions()[selectedSuggestionIndex]);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filterSuggestions().length - 1
      );
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < filterSuggestions().length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const noDataFoundMessage =
    searchName.trim() !== "" && filterSuggestions().length === 0 ? (
      <li>No Data Found</li>
    ) : null;

  return (
    <div className="App">
      <h2 >Name Search</h2>
      <input
        type="text"
        value={searchName}
        onKeyDown={handleKeyDown} // Handle keyboard navigation
        placeholder="Enter Name"
        onChange={handleSearch}
      />
      <ul>
        {renderSuggestions()}
        {noDataFoundMessage}
      </ul>
    </div>
  );
}

export default App;
