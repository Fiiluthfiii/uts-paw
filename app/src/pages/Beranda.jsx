import mahasiswa from '../../mahasiswa.json'
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Beranda() {

  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section id="beranda">
      <h1>Daftar Tugas</h1>
      <p>Tema: {mahasiswa.tema}</p>
       {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} tugas dalam {jumlahKategori} kategori.
        </p>
      )}
      <Link to="/koleksi">Lihat semua tugas</Link>
    </section>
  )
}