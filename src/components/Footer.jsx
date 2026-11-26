export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="--green-900">
        © {anio} MercaCauca SENA · Yosuad David Castillo Valdes · ADSO 3223898
      </p>
      <p className="footer__apis">
        Datos de prueba:{' '}
        <a href="https://fakestoreapi.com" target="_blank" rel="noreferrer">
          FakeStoreAPI
        </a>{' '}
        y{' '}
        <a href="https://dummyjson.com" target="_blank" rel="noreferrer">
          DummyJSON
        </a>
      </p>
    </footer>
  );
}

