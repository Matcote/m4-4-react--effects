import React from "react";

function useDocumentTitle(title, fallbackTitle) {
  React.useEffect(() => {
    document.title = title + " cookies - Workshop";
    return () => {
      document.title = fallbackTitle;
    };
  }, [title, fallbackTitle]);
}

export default useDocumentTitle;
