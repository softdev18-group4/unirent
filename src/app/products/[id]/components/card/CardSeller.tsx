import Image from "next/image";
import { CustomButton } from '..';

const CardSeller = () => {
  return (
    <div className="card_seller">
      <div className="left">
        <Image
          src={"/product.png"}
          width={50}
          height={50}
          className="avatar_card"
          alt="avatar"
        />
        <div className="avatar_title">
            <h1>{"Prayut D. Monkey"}</h1>
            <CustomButton customBtn="btn_custom3" title="แชทพูดคุย"/>
        </div>
      </div>
      <div className="line"></div>
      <div className="right">
            <div className="item">
                <h1>คะแนน</h1>
                <p>3</p>
            </div>
            <div className="item">
            <h1>รายการสินค้า</h1>
                <p>2</p>
            </div>
            <div className="item">
            <h1>อัตราการตอบกลับ</h1>
                <p>94%</p>
            </div>
            <div className="item">
            <h1>เวลาในการตอบกลับ</h1>
                <p>ภายในไม่กี่ชั่วโมง</p>
            </div>
            <div className="item">
            <h1>เข้าร่วมเมื่อ</h1>
                <p>1 ปีที่ผ่านมา</p>
            </div>
      </div>
    </div>
  );
};

export default CardSeller;
