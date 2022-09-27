import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import "../styles/photo-search.scss";

const categoriesList = [
  { name: "All" },
  { name: "Sea" },
  { name: "Mountains" },
  { name: "Architecture" },
  { name: "Cities" },
];

export function PhotoSearchPage() {
  const [collection, setCollection] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const selectedCategory = category ? `category=${category}` : "";

    setIsLoading(true);
    fetch(
      `https://62bb2e96573ca8f83294af75.mockapi.io/photo-collection?page=${page}&limit=3&${selectedCategory}`
    )
      .then((res) => res.json())
      .then((json) => setCollection(json))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [category, page]);

  return (
    <Container>
      <div className="PhotoSearchPage">
        <h1>My photo collection</h1>
        <div className="top">
          <ul className="tags">
            {categoriesList.map(({ name }, index) => (
              <li
                key={name}
                onClick={() => setCategory(index)}
                className={category === index ? "active" : ""}
              >
                {name}
              </li>
            ))}
          </ul>

          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
            placeholder="Search by name"
          />
        </div>

        <div className="content">
          {isLoading ? (
            <h2 className="loading">Loading... </h2>
          ) : (
            collection
              .filter(({ name }) =>
                name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map(({ name, photos }, index) => (
                <Collection
                  name={name}
                  images={photos}
                  key={`${index + name}`}
                />
              ))
          )}
        </div>

        <ul className="pagination">
          {[...Array(5)].map((_, index) => (
            <li
              onClick={() => setPage(index + 1)}
              key={index}
              className={page === index + 1 ? "active" : ""}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

function Collection({ name, images }) {
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
}
