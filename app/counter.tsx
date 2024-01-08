'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h2 className="text-2xl">{count}</h2>
      <button
        type="button"
        className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
}
