import { useEffect } from "react";

const useFocus = ref => {
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  });
};

export { useFocus };
