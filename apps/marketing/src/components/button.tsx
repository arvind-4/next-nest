'use client';
import { useState } from 'react';

import { BASE_URL } from '../config';
import View from './view';

export default function Button(): JSX.Element {
  const [date, setDate] = useState<string | null>(null);
  const handleClick = async () => {
    const response = await fetch(`${BASE_URL}/date`);
    const data = (await response.json()) as { date: string };
    setDate(data.date);
  };
  return (
    <div>
      <button
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        onClick={handleClick}
      >
        Fetch Date
      </button>
      {date ? <View date={date} /> : null}
    </div>
  );
}
