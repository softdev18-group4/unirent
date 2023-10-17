import ProductList from "./components/ProductList";
import ProfileCard from "./components/ProfileCard";

function Profile({ params }: { params: { user_id: string } }) {
  return (
    <div className="p-8">
      <div className="cursor-default font-bold uppercase text-2xl lg:text-3xl">
        Profile
      </div>
      <ProfileCard userId={params.user_id}></ProfileCard>
      <div className="cursor-default font-bold uppercase text-md lg:text-xl text-slate-400">
        รายการที่ปล่อยเช่า
      </div>
      <div className="w-full border-2 my-2 border-dashed"></div>
      <ProductList userId={params.user_id}></ProductList>
    </div>
  );
}
export default Profile;
