import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

const GET_ALL_PRODUCTS = gql`
  query ALL_PRODUCT_QUERY {
    allProducts {
      id
      name
      description
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

function Products() {
  const { data, error, loading } = useQuery(GET_ALL_PRODUCTS);
  console.log(data, error, loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>OOOps Something went wrong :( </p>;
  return (
    <div>
      <ProductsListStyles>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsListStyles>
    </div>
  );
}

export default Products;
