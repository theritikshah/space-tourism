import { useEffect } from "react";

export default function useDocumentClick(
  callback: () => void,
  dependencies: React.MutableRefObject<any>[]
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const elements = dependencies.map((ref) => ref.current);

      if (
        elements.length &&
        !elements.some(
          (element) => element && element.contains(event.target as Node)
        )
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, dependencies);
}
