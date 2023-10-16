import { Metadata } from "next";
import PaginationTable from "../components/PaginationTable";

export const metadata: Metadata = {
  //title: "Your Orders",
};

function OrdersPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-end">
        <div className="cursor-default font-bold uppercase text-2xl lg:text-3xl">
          your orders
        </div>
      </div>
      <PaginationTable api="yourOrder"></PaginationTable>
    </div>
  );
}
export default OrdersPage;
