import React from 'react';
import Rating from './Rating';
import Card from 'react-bootstrap/Card';
import listProducts from './Products';

const Product = (props) => {
  return(
    <div>
      {listProducts.length > 0 ? (
        <ul>{listProducts}</ul>
      ):(
        <ul>No Products to display</ul>
      )}
      <Card>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={props.data.imageUrl}
          alt="Image"
        />
       <Card.Body>
        <h5>{props.data.productName}</h5>
        { props.data.releasedDate }
        <Rating
          rating={props.data.rating} numOfReviews={props.data.numOfReviews}
        />
        <p>{props.data.description}</p>
       </Card.Body>
      </Card>
    </div>
  );
}

export default Product;