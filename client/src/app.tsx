import { useCallback, useState } from "react";
import { testApi } from "./server-api";
import Button from "@mui/material/Button";

export const App = (): JSX.Element => {
  const [state, setState] = useState("");

  const onClick = useCallback(() => {
    const fetcher = async () => {
      try {
        const resp = await testApi();
        const text = await resp.text();
        setState(text);
      } catch (error) {
        setState("API throw an error");
      }
    };

    void fetcher();
  }, []);

  return (
    <div className="flex flex-col justify-center m-2 gap-2">
      <span>My app is here</span>
      <Button onClick={onClick}>Click</Button>
      <span>Server response: {state}</span>
    </div>
  );
};
