import { Link } from 'umi';

const Products = () => {
  return (
    <div>
      Many Products<Link to="/products/2587">Specific Product</Link>;
    </div>
  );
};

export default Products;
