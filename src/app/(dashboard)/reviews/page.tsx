import { Metadata } from "next";
import PaginationTable from "./components/PaginationTable";

export const metadata: Metadata = {
  title: "Reviews",
};

function ReviewsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-end">
        <div className="cursor-default font-bold uppercase text-2xl lg:text-3xl">
          Your Product reviews
        </div>
      </div>
      <PaginationTable></PaginationTable>
    </div>
  );
}
export default ReviewsPage;
