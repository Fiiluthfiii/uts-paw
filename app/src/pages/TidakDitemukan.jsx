import { Link } from 'react-router-dom'
import './TidakDitemukan.css'


export default function TidakDitemukan() {
  return (
    <section id="tidak-ditemukan">
      <p>Halaman tidak ditemukan.</p>
      <h1 className="error">404</h1>
      <Link className="Link" to="/">Kembali ke beranda</Link>
    </section>
  )
}