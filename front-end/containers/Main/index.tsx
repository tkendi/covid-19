import React from "react";

//api
import { getKorea } from "api/Korea/Get";
import { getWorld } from "api/World/Get";

const Main = () => {
  console.log(getKorea());
  console.log(getWorld());
  return <></>;
};

export default Main;
