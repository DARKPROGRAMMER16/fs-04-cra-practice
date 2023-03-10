import React from "react";

const Card = ({imgurl, imgalt, cardtitle}) => {
  return (
    <>
      <div class="card" style={{width:"18rem"}}>
        <img src={imgurl} class="card-img-top" alt={imgalt} />
        <div class="card-body">
          <h5 class="card-title">{cardtitle}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
