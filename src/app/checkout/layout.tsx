import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
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
