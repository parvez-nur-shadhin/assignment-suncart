"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import UserImage from "@/assets/user.png";
import Link from "next/link";

const page = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="container mx-auto mt-10 mb-10">
      <div>
        {user ? (
          <Image
            src={user?.image}
            alt={user?.name}
            height={100}
            width={200}
            className="rounded-xl mx-auto"
          />
        ) : (
          <Image
            src={UserImage}
            alt={"User Image"}
            height={100}
            width={200}
            className="rounded-xl mx-auto"
          />
        )}
      </div>
      <div className="bg-base-300 rounded-xl mt-10">
        <div className="max-w-225 mx-auto p-4 space-y-3">
          <div className="flex items-center justify-between border-b-black border-t-black max-w-225 mx-auto p-4">
            <h1 className="text-lg font-semibold">Name:</h1>
            <h1 className="text-lg text-center font-bold">
              {user ? user.name : "No Name"}
            </h1>
          </div>
          <div className="flex items-center justify-between border-b-black border-t-black max-w-225 mx-auto p-4">
            <h1 className="text-lg font-semibold">Email:</h1>
            <h1 className="text-lg text-center font-bold">
              {user ? user.email : "No Email"}
            </h1>
          </div>
          <div className="flex justify-end items-center">
            {user ? (
              <button className="btn btn-outline text-blue-500 border-blue-500">
                <Link href={"/update-info"}>Update Information</Link>
              </button>
            ) : (
              <button className="btn bg-blue-500 text-white">
                <Link href={"/login"}>Login</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
