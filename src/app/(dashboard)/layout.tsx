import Sidebar from "./components/Sidebar";
import "./styles.css";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar
        dashboard="/dashboard"
        product="/my-shop/products"
        orders="/my-shop/orders"
        messages="/messages"
        history="/history"
        reviews="/reviews"
        settings="/settings"
        profileImg="/product.png"
        name="Tylor Swift"
        email="tylor@gmail.com"
      ></Sidebar>
      <div className="md:ml-64 z-30">
        <main>{children}</main>
      </div>
    </div>
  );
}