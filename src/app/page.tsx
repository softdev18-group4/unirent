import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "@/components/SignOutButton";

const Page = async () => {
  const session = await getServerSession(options);

  return (
    <div className="main_container">
      {session && <SignOutButton />}

      {JSON.stringify(session, null, 2)}
    </div>
  );
};

export default Page;
