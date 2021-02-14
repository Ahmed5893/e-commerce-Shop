import React from "react";
import {Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} alt={product.name} variant="top" />
      </Link>
      <Link to={`/product/${product._id}`}>
        <Card.Title as="h5">{product.name}</Card.Title>
      </Link>
      <Card.Text as="div">
        <div className="my-3">
         <Rating value={product.rating} text={`${product.numReviews} reviews`}  />
        </div>
      </Card.Text>
      <Card.Text as='h3'>
          {product.price} DT
      </Card.Text>
    </Card>
  );
};

export default Product;
