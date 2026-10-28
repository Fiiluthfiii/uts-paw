import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, tayang } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p> Kategori : {item.kategori} </p>
      <p> Sutradara : {item.sutradara} </p>
      <p> Tahun Rilis : {item.tahunRilis} </p>
      <p> Rating : {item.rating} </p>
      <p> Tayang : {item.tayang} </p>
    </article>
  )
}