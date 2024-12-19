"use client";

import { useState } from "react";

interface CheckboxProps {
  check: boolean;
}

export default function Checkbox(props: CheckboxProps) {
  const { check } = props;
  const [isChecked, setIsChecked] = useState<boolean>(check);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={checkHandler}
        className=""
      />
    </div>
  );
}
