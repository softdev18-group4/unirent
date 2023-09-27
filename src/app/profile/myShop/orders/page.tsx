import { Metadata } from "next";
import PaginationTable from "../components/paginationTable";

export const metadata: Metadata = {
  title: "Your Orders",
};

function OrdersPage() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-end">
        <div className="cursor-default font-bold uppercase text-2xl lg:text-3xl">
          your orders
        </div>
      </div>
      <PaginationTable api="myOrder api"></PaginationTable>
    </div>
  );
}
export default OrdersPage;
