import { useState } from 'react';

export default function ItemCard(props) {
  const { getTodo } = props;
  const [title, setTitle] = useState('');

  const handleAdd = async () => {
    let res = await fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    res = await res.json();

    setTitle('');
    getTodo();
  };

  return (
    <div className="bg-secondary p-3 mb-2 rounded shadow">
      <div className="text-center mb-3 font-bold text-lg">Your Todo</div>
      <div>
        <input
          id="title-input"
          name="title"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {title != '' && (
        <div className="mt-4">
          <button
            type="button"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-900 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
