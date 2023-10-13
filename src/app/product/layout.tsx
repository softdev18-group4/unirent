import Navbar from "./components/navbar";
import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
}
