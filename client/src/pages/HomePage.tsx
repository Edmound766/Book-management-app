import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  );
}
