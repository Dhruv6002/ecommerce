import {FaDiamond} from 'react-icons/fa6'
import {Link} from 'react-router-dom'
import {FiArrowRight , FiArrowUpRight} from 'react-icons/fi'
const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-100">
  <div className="flex items-center mt-10 p-8 ml-12">
    <FaDiamond color="red" />
    <p className="ml-2 text-lg sm:text-xl md:text-2xl font-bold text-red-400">
      A Physical Games Press
    </p>
  </div>
  <p className="ml-4 pl-16 max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
    The Archive for players who{" "}
    <span className="text-red-500">still</span>{" "}
    collect.
  </p>
    <p className="ml-4 pl-16  text-gray-500 max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
      Publishers went digital. Shelves went empty. We print the missing pieces:- curator-grade game posters and boxed cover art for PS5, PS4, and Xbox.
    </p>
    < div className="flex flex-col items-center w-full">
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 px-4">
  <Link to="/posters" className="w-full sm:w-auto">
  <button className="w-full ml-10 sm:w-72 py-4 px-6 text-lg bg-black text-white rounded-md flex items-center justify-between">
    <span>Poster Catalog</span>
    <FiArrowRight />
  </button>
</Link>
<Link to="/gamedvdcover" className="w-full sm:w-auto">
  <button className="w-full ml-10 sm:w-72 py-4 px-6 text-lg bg-transparent text-black border border-black rounded-md flex items-center justify-between">
    <span>Game DVD Cover</span>
    <FiArrowRight />
  </button>
</Link>
</div>
</div>
<p className="ml-2 pl-16 font-bold text-black text-4xl max-w-5xl text-lg sm:text-5xl md:text-6xl lg:text-7xl mt-12">A frame for every fan.
    </p>
    <p className="ml-2 mt-6 pl-16  text-gray-500 max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
      Various iconic titles. A4 or A5. Museum-grade matte print, hand-cut in-studio
    </p>
    <Link to="/posters">
  <p className="inline-flex items-center gap-8 ml-12 mt-2 px-6 py-3 text-black text-sm sm:text-md md:text-lg lg:text-xl rounded-md hover:bg-black hover:text-white transition-colors">
    <span>BROWSE THE CATALOG</span>
    <FiArrowUpRight className="text-xl sm:text-2xl" />
  </p>
</Link>

<p className="ml-2 pl-16 font-bold text-black text-4xl max-w-5xl sm:text-5xl md:text-6xl lg:text-7xl mt-12">A box for your digital.
    </p>
    <p className="ml-2 mt-6 pl-16  text-gray-500 max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl mt-8">
      PS5/PS4/Xbox. Custom cover art + jewel case. Disc not included- the shelf presence is.
    </p>
    <Link to="/gamedvdcover">
    <p className="inline-flex items-center gap-8 ml-12 mt-2 px-6 py-3 text-black text-sm sm:text-md md:text-lg lg:text-xl rounded-md hover:bg-black hover:text-white transition-colors">
    <span>ORDER A CASE</span>
    <FiArrowUpRight className="text-xl sm:text-2xl" />
  </p>
  </Link>
  <div className="w-full h-[1px] bg-gray-400 mt-2"></div>
  <div className="flex  gap-4 items-center p-8 ml-8">
    <FaDiamond color="red" />
    <p className=" text-lg sm:text-xl md:text-2xl font-bold text-red-400">
     The Process
    </p>
  </div>
  <p className=" pl-16 max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  Choose, customise, delivered.
</p>
    <p className="ml-1 mt-6 pl-16  text-gray-500 max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl mt-8">
      Every order is printed to spec and shipped swiftly. Guest checkout, Razorpay for payment.
    </p>
    <div className="w-full px-6 sm:px-12 lg:px-16 mt-16">
  <div className=" ml-16 grid grid-cols-1 sm:grid-cols-3 border border-gray-300">
    <div className="p-4 sm:p-8 border-r border-gray-300">
      <span className="text-4xl sm:text-6xl font-bold text-red-500">
        1.
      </span>

      <h3 className=" text mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-black">
        Pick a title
      </h3>

      <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-500">
        Browse the archive.
      </p>
    </div>
    <div className="p-4 sm:p-8 border-r border-gray-300">
      <span className="text-4xl sm:text-6xl font-bold text-red-500">
        2.
      </span>

      <h3 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-black">
        Set the format
      </h3>

      <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-500">
        A4 or A5 for posters. PS5, PS4, or Xbox for CD covers.
      </p>
    </div>
    <div className="p-4 sm:p-8">
      <span className="text-4xl sm:text-6xl font-bold text-red-500">
        3.
      </span>

      <h3 className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-black">
        Pay
      </h3>
      <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-500">
        Razorpay checkout.
      </p>
    </div>

  </div>
</div>
<div className="w-full h-[1px] bg-gray-400 mt-8"></div>
<p className="pl-16 mt-8 max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  Physicality<span className="text-red-500">.</span> 
</p>
<p className="mt-6 pl-16  text-gray-500 max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl mt-8">
      Studio-crafted posters and physical cover boxes for the games you love.In an all-digital world, we keep the collection alive 
    </p>
</div>
  )
}

export default Hero
