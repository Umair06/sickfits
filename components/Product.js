/* eslint-disable react/prop-types */
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import { formatMoney } from '../lib/formatMoney';

function Product({ product = {} }) {
  const { name, price, description, photo } = product;
  return (
    <div>
      <ItemStyles>
        <img src={photo?.image?.publicUrlTransformed} alt={name} />
        <Title>
          <Link href={`/product/${product.id}`}>{name}</Link>
        </Title>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>
      </ItemStyles>
    </div>
  );
}

export default Product;
