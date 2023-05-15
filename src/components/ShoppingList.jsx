const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  ));

  //   return <ul>{listItems}</ul>;

  return (
    <ul>
      <li style={{ color: products[0].isFruit ? 'magenta' : 'darkgreen' }}>{products[0].title}</li>
      <li style={{ color: products[1].isFruit ? 'magenta' : 'darkgreen' }}>{products[1].title}</li>
      <li style={{ color: products[2].isFruit ? 'magenta' : 'darkgreen' }}>{products[2].title}</li>
    </ul>
  );
}
