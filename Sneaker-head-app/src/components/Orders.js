export const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  return (
    <div className="mt-44 flex flex-wrap justify-around">
      {orders.map(({ items, total }) => (
        items.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            <img className="w-full" src={item.img} alt={item.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">
                Total Price: ₹{total}
              </p>
            </div>
          </div>
        ))
      ))}
    </div>
  );
};