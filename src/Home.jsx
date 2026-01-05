import React from "react";
import hero from "../src/assets/images/hero.jpg"
import { Navbare } from "./Navbare";

export const Home = () => {
  return (
 <>
       <div
      className="w-full h-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
    <div>
        <Navbare />
    </div>
    </div>
 </>
  );
};
