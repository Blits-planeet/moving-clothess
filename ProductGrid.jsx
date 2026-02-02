'use client';

const products = [
  { id: 'tee', name: 'Moving Tee', price: 2900 },
  { id: 'hoodie', name: 'Moving Hoodie', price: 5900 }
];

export default function ProductGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 40 }}>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ddd', padding: 20 }}>
          <div style={{ height: 200, background: '#eaeaea' }} />
          <h3>{p.name}</h3>
          <p>€{(p.price / 100).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
