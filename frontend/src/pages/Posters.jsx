import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.avif";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.webp";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.webp";
import { Link } from "react-router-dom";
const Posters = () => {
  const products = [
    {
      id: 1,
      name: "Demon slayer Fire Breathing",
      price: "$4.99",
      image:image1,
    },
    {
      id: 2,
      name: " Watchdogs legion",
      price: "$5",
      image:image2,
    },
    {
      id: 3,
      name: " Read Dead Redemption 2",
      price: "$6.2",
      image:image3,
    },
    {
      id: 4,
      name: "Assasins Creed Shadow",
      price: "$3",
      image:image4,
    },
    {
      id: 5,
      name: "Attack on titan",
      price: "$5",
      image:image5,
    },
    {
      id: 6,
      name: "Cyberpunk 2077",
      price: "$5",
      image:image6,
    },
    {
      id: 7,
      name: "God of War",
      price: "$2.87",
      image:image7,
    },
    {
      id: 8,
      name: "Ghost of Yotei",
      price: "$2",
      image:image8,
    },
    {
      id: 9,
      name: "Frieren Beyong Journeys End",
      price: "$2",
      image:image9,
    },
  ];
  return (
    <div className="min-h-screen bg-amber-100 px-4 py-10 sm:px-6 lg:px-8">

      <h1 className="mb-10 text-center text-3xl font-bold">
          Our Posters
      </h1>
    <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="flex w-full max-w-xs flex-col items-center rounded-xl bg-white p-4 shadow-md">
          <Link to={`/posters/${product.id}`} className="w-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full bg-white object-contain"
            />
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="mt-2 text-lg font-bold text-amber-700">{product.price}</p>
          </Link>
          <Link
            to="/cart"
            className="mt-4 w-full rounded-lg bg-black px-4 py-3 font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:bg-amber-800"
          >
            Add to cart
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Posters
