import React from 'react';

export default function ItemChecbox(props) {
  const { isDone, id, getTodo } = props;

  const handleSwitchDone = async () => {
    let res = await fetch(`/api/todo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDone: !isDone }),
    });
    res = await res.json();

    getTodo();
  };

  return (
    <div className="flex items-center justify-end col-span-2">
      <input
        checked={isDone ? true : false}
        onClick={handleSwitchDone}
        id={`default-checkbox-${id}`}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  );
}
