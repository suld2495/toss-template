'use client';

import useStore from "@/store";
import { useEffect } from "react";

const Reset = () => {
  const { reset } = useStore();

  useEffect(() => {
    reset();
  }, [reset]);

  return null;
};

export default Reset;