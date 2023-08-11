import { useReducer } from "react"
import { useSearchParams } from "react-router-dom";
type Mode = "preview" | "edit"

export default function useMode() {
  const [mode, dispatch] =useReducer((mode: Mode) => (mode === "preview" ? "edit" : "preview"), "preview");
  const [, setSearchParams] = useSearchParams({ mode });

  const setMode = (newMode: boolean) => {
    dispatch();
    newMode ? setSearchParams({ mode: "edit" }): setSearchParams({ mode: "preview" });
    return newMode
  };

  return [mode, setMode] as const;
}