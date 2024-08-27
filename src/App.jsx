import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();
  const [searchField, setSearchField] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  console.log(data);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setData(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredData = data.filter((result) => {
      return result.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredData(newFilteredData);
  }, [data, searchField]);

  return (
    <div>
      <input type="search" placeholder="Search..." onChange={onSearchChange} />
      <div>
        {filteredData.map((data) => (
          <h1>{data.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default App;
