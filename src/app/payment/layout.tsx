import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main>{children}</main>
    </div>
  );
}
