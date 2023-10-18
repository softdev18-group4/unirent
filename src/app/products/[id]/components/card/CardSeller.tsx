import { useAppSelector } from '@/redux/hooks';
import { ProductState } from '@/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CardSeller = () => {
  const product : ProductState=  useAppSelector(
    (state: { productReducer: { value: any } }) => state.productReducer.value
  );
  const { data: session } = useSession();
  const router = useRouter()

  const handleCLick = async () => {

    const res = await fetch(`/api/services/conversation`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken || ""}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: product.ownerId,
      }), 
    });

    const conversation = await res.json();
    router.push(`/messages/${conversation.id}`)
  }
  
  return (
    <div className="card_seller">
      <div className="left">
        <img
          src={`${product.owner.profileImage}`}
          width={50}
          height={50}
          className="avatar_card"
          alt="avatar"
        />
        <div className="avatar_title">
          {product && <h1>{product.owner.firstName}</h1>}
            
            <button onClick={handleCLick} className="btn_custom3 transition ease-in-out delay-150 duration-200 hover:scale-110 cursor-pointer text-white bg-[var(--theme-color2)" >แชทพูดคุย</button>
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
