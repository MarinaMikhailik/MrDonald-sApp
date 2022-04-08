import { useEffect } from "react";

export function useTitle(openItem){
  useEffect(() => {
    document.title = !openItem ? "MrDonald's": openItem.name
  }, [openItem]);
};

