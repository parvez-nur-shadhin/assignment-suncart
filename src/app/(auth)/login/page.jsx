"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if(error) {
      toast.warning(error.message);
    }
    else{
      toast.info("You have logged in successfully");
    }

  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-4">
        Login Your Account
      </h1>
      <div className="flex items-center justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register("email")}
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register("password")}
            />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
