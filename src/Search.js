import React from "react";
import { useGlobelContext } from "./context";

const Search = () => {
  const { query, serchPost } = useGlobelContext();
  console.log("query: ", query);
  return (
    <>
      <h1>News Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="serch Here"
            value={query}
            onChange={(e) => serchPost(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
