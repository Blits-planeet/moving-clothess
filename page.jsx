import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main>
      <section style={{ padding: '80px', background: '#f3f3f3' }}>
        <h1 style={{ fontSize: '48px' }}>Moving Clothes</h1>
        <p>Modern clothing designed to move with you.</p>
        <button style={{ marginTop: 20, padding: '12px 24px', background: '#000', color: '#fff' }}>
          Shop Now
        </button>
      </section>

      <section style={{ padding: '80px' }}>
        <h2>New Arrivals</h2>
        <ProductGrid />
      </section>
    </main>
  );
}
