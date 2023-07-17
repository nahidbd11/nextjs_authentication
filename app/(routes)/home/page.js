import Loading from "@/app/loading";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row items-center gap-x-3 p-8">
        <Loading />
        <h2 className="text-3xl text-green-900">Loading...</h2>
      </div>
      Home is sweet place
    </div>
  );
};

export default Home;
