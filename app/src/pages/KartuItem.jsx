import { Link } from 'react-router-dom'
import './Kartuitem.css'


export default function KartuItem({ item }) {
  const { id, judul, kategori, tayang } = item
  return (
    <article className="kartu">
      <h3>
        <Link className="judul-kartu" to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p className="p"> Kategori : {item.kategori} </p>
      <p className="p"> Sutradara : {item.sutradara} </p>
      <p className="p"> Tahun Rilis : {item.tahunRilis} </p>
      <p className="p"> Rating : {item.rating} </p>
      <p className="p"> Tayang : {item.tayang} </p>
    </article>
  )
}