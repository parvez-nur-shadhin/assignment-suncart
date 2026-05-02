"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/login",
    });

    if(error) {
      toast.warning(error.message);
    }
    else{
      toast.success("You have been registered");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center font-bold mt-4">
        Register Your Account
      </h1>
      <div className="flex items-center justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
              {...register("name")}
            />

            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Photo URL"
              {...register("photo")}
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email"
              {...register("email")}
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter Your Password"
              {...register("password")}
            />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
