import { CardDetailProps } from "@/types";

const CardDetail = ({ detail }: CardDetailProps) => {
  return (
    <div className="card_detail">
      <p>{detail}</p>
    </div>
  );
};

export default CardDetail;
