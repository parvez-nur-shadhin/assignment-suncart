import { getSummerCareTips } from "@/lib/dataFetching";
import React from "react";
import { LuCloudSun } from "react-icons/lu";

const SummerTips = async () => {
  const summerCareTips = await getSummerCareTips();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl text-center font-bold">Summer Care Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
        {summerCareTips.map((tip) => {
          return (
            <div key={tip.id}>
              <div className="card h-full bg-base-100 card-lg shadow-xl">
                <div className="card-body">
                  <h2 className="card-title font-bold"> <LuCloudSun /> {tip.title}</h2>
                  <p>
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummerTips;