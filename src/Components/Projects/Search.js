import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Search = ({ filterProjects }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterProjects(query);
  };
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search Project name... "
          value={searchQuery}
          onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </form>
    </div>
  );
};

export default Search;
