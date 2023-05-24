import './MangaListContainer.css';
import AddToCartButton from '../AddToCartButton';

function MangaListContainer({ greeting }) {
  const mangaList = [
    {
      id: 1,
      name: "One Piece: East Blue 1-2-3",
      price: 10,
      age: 14,
      genre: "shonen",
      image: "https://m.media-amazon.com/images/I/71y+XnBXm4L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      name: "Naruto, Vol 1",
      price: 12,
      age: 14,
      genre: "shonen",
      image: "https://m.media-amazon.com/images/I/71QYLrc-IQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 3,
      name: "Dragon Ball, Vol 1",
      price: 11,
      age: 14,
      genre: "shonen",
      image: "https://m.media-amazon.com/images/I/71l53JXXQ3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 4,
      name: "Bleach, Vol 1",
      price: 14,
      age: 14,
      genre: "shonen",
      image: "https://m.media-amazon.com/images/I/51FEKMNJTbL.jpg"
  },
  {
      id: 5,
      name: "Attack on Titan, Volume 1",
      price: 18,
      age: 18,
      genre: "seinen",
      image: "https://m.media-amazon.com/images/I/91M9VaZWxOL._AC_UF1000,1000_QL80_.jpg"
  },
  {
      id: 6,
      name: "Death Note, Vol. 1",
      price: 15,
      age: 18,
      genre: "seinen",
      image: "https://m.media-amazon.com/images/I/51SkSDhUidL._AC_UF1000,1000_QL80_.jpg"
  },
  {
      id: 7,
      name: "Fullmetal Alchemist, Vol. 1",
      price: 13,
      age: 14,
      genre: "shonen",
      image: "https://m.media-amazon.com/images/I/61GWN9NPJvL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    name: "Acid Town, Volume 1",
    price: 16,
    age: 18,
    genre: "yaoi",
    image: "https://m.media-amazon.com/images/I/51VJzRdhNYL._SY346_.jpg"
},
{
    id: 9,
    name: "Kimetsu No Yaiba, Vol 1",
    price: 17,
    age: 14,
    genre: "shonen",
    image: "https://m.media-amazon.com/images/I/81ZNkhqRvVL._AC_UF1000,1000_QL80_.jpg"
},
{
    id: 10,
    name: "Neon Genesis Evangelion 3-in-1 Edition, Vol. 1",
    price: 14,
    age: 18,
    genre: "seinen",
    image: "https://m.media-amazon.com/images/I/51RZYiVyRFL._AC_UF1000,1000_QL80_.jpg"
},
{
    id: 11,
    name: "Berserk",
    price: 15,
    age: 18,
    genre: "seinen",
    image: "https://ia801407.us.archive.org/view_archive.php?archive=/11/items/olcovers86/olcovers86-L.zip&file=869205-L.jpg"
},
{
    id: 12,
    name: "Given, Vol. 1",
    price: 16,
    age: 18,
    genre: "yaoi",
    image: "https://m.media-amazon.com/images/I/71qdwc4c3pL.jpg"
},
  ];

  const handleAddToCart = (manga) => {
    console.log(`Added ${manga.name} to the cart`);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <ul className="manga-list-container">
        {mangaList.map((manga) => (
          <li key={manga.id} className="manga-list-item">
            <h3>{manga.name}</h3>
            <p>Price: ${manga.price}</p>
            <p>Age: {manga.age}</p>
            <p>Genre: {manga.genre}</p>
            <img src={manga.image} alt={manga.name} />
            <AddToCartButton onClick={() => handleAddToCart(manga)} />
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export {MangaListContainer};
