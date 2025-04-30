import React from "react";
import { useParams } from "react-router-dom";

export default function Repos() {
  const { repositorio } = useParams();

  return <h1 style={{ color: "#FFF" }}>{repositorio}</h1>;
}
