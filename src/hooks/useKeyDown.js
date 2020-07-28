import React from "react";

function useKeyDown(code, callback) {
  React.useEffect(() => {
    const handleKeydown = (ev) => {
      if (ev.code === code) {
        callback();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
}

export default useKeyDown;
