'use client';

import { useEffect, useState } from 'react';

interface CheckboxProps {
  check: boolean;
  label?: string | null;
}

export default function Checkbox(props: CheckboxProps) {
  const { check, label } = props;
  const [isChecked, setIsChecked] = useState<boolean>(check);

  useEffect(() => {
    setIsChecked(check);
  }, [check]);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <label className="flex items-center justify-center w-4 h-4 relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={checkHandler}
          className="
        peer appearance-none shrink-0 w-4 h-4 border border-checkbox-gray-border rounded bg-white
        checked:bg-checkbox-blue
      "
        />
        <svg
          className="absolute w-3.5 h-3.5 pointer-events-none hidden peer-checked:block stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        {label && <span className="text-sm">{label}</span>}
      </label>
    </div>
  );
}
