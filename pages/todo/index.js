import { useState, useEffect } from 'react';

import ItemCard from '../../components/ItemCard';
import FormCard from '../../components/FormCard';

export default function Home() {
  const [data, setData] = useState([]);

  const getTodo = async () => {
    const res = await fetch('/api/todo');
    const { data } = await res.json();
    setData(data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 h-screen overflow-auto p-2 py-5">
        <div className="text-center mb-3 text-lg font-bold text-lime-700">
          Done
        </div>
        {data?.map((item, idx) => (
          <>
            {item.isDone == true && (
              <ItemCard data={item} key={idx} idx={idx} getTodo={getTodo} />
            )}
          </>
        ))}
      </div>
      <div className="col-span-4 h-screen overflow-auto p-2 py-5">
        <div className="text-center mb-3 text-lg font-bold text-yellow-700">
          Doing
        </div>
        {data?.map((item, idx) => (
          <>
            {item.isDone == false && (
              <ItemCard data={item} key={idx} idx={idx} getTodo={getTodo} />
            )}
          </>
        ))}
      </div>
      <div className="col-span-4 p-2 py-5">
        <FormCard getTodo={getTodo} />
      </div>
    </div>
  );
}
