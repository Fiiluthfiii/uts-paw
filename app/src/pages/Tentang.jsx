import mahasiswa from '../../mahasiswa.json'
import './Tentang.css'


// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/Fiiluthfiii/uts-paw'
const PORTO = 'https://firmanluthfi.web.id'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section id="tentang">
      <h1>Tentang</h1>
        <dl>
          <dt>Nama</dt>
          <dd>{nama}</dd>
          <dt>NIM</dt>
          <dd>{nim}</dd>
          <dt>Kelas</dt>
          <dd>{kelas}</dd>
          <dt>Tema</dt>
          <dd>{tema}</dd>
        </dl>
        <div className="button-link">
        <p className="repo">
          <a href={REPO}>Kode sumber</a>
        </p>
        <p className="repo">
          <a href={PORTO}>Website Portfolio</a>
        </p>
        </div>
    </section>
  )
}