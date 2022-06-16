import ItemChecbox from './ItemChecbox';

export default function ItemCard(props) {
  const { data, idx, getTodo } = props;

  return (
    <div className="bg-secondary p-2 mb-2 rounded grid grid-cols-12" key={idx}>
      <p
        className={`truncate col-span-10 ${
          data.isDone == true && 'text-stone-400 line-through'
        }`}
      >
        {data.title}
      </p>
      <ItemChecbox isDone={data.isDone} id={data.id} getTodo={getTodo} />
    </div>
  );
}
