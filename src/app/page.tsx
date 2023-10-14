
import type { NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Page = async (req: NextRequest) => {
  const session = await getServerSession(options);
  return (
    <div className="main_container">{JSON.stringify(session, null, 2)}</div>
  );
};

export default Page;
