"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const UpdateInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photo } = data;

    await authClient.updateUser({
      image: photo,
      name: name,
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-4">
        Update your Information
      </h1>
      <div className="flex items-center justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Enter Your Photo"
              {...register("photo")}
            />

            <button className="btn btn-neutral mt-4">Update</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfoForm;
