
import React, { useEffect } from "react";
import { useGlobelContext } from "./context";

const Stories = () => {
  const { hits, nbPages, isLoading ,removePost} = useGlobelContext();
  console.log("hits: ", hits);

  if (isLoading) {
    return (
      <>
        <h1> Loading.......</h1>
      </>
    );
  }
  return (
    <>
     <div className="stories-div">
      {hits.map((cutPost) => {
        const { title, author, objectID, url, num_comments } = cutPost;
        return (
          <>
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By  <span> {author} </span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href="#" onClick={()=>removePost(objectID)}  >Remove</a>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
};

export default Stories;
