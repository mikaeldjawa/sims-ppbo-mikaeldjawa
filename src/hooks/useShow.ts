import { useState } from "react";

export default function useShow() {
  const [isShow, setIsShow] = useState(false);

  return {
    isShow,
    setIsShow,
  };
}
