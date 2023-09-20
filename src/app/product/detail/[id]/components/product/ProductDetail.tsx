import { CardDetail } from '..';
import { mockDetail } from '@/constants';

const ProductDetail = () => {
  return (
    <div className="product_detail">
      <p className="title">รายละเอียดสินค้า</p>
        <CardDetail detail={mockDetail} />
    </div>
  );
};

export default ProductDetail;
