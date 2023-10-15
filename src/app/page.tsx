import SignOutButton from "@/components/SignOutButton";

import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Page = async () => {
  const session = await getServerSession(options);

  return (
    <div className="main_container">
      {session && <SignOutButton />}

      {session && <p>Token: {session.user.accessToken}</p>}
      {session && <p>Profile {JSON.stringify(session.user.data)}</p>}
    </div>
  );
};

export default Page;
