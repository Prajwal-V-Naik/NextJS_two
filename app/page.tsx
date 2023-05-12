// import Image from "next/image"
import Link from "next/link"
// import  {useState}  from "react"
import 'remixicon/fonts/remixicon.css'


// function More(){
//   const [isMoreTextVisible, setIsMoreTextVisible] = useState(false);
// }

export default function Home() {
//   const [isMoreTextVisible, setIsMoreTextVisible] = useState(false);
  return (
    <div className="min-h-screen">
    <nav className="mx-24 my-8">
      <ul className="flex justify-center">
        <Link href='/blog'><li className="mx-5 font-bold">Blog</li></Link>
        <Link href='/'><li className="mx-5 font-bold">Home</li></Link>
        <Link href='/about'><li className="mx-5 font-bold">About</li></Link>
        <Link href='/contact'><li className="mx-5 font-bold">Contact</li></Link>
      </ul>
    </nav>
    <main className="flex flex-col items-center justify-center gap-4 mt-20">
      <div className="flex flex-row justify-center items-center mb-10">
        <h1 className='text-6xl text-blue-200'>Code{' '}<span className='text-7xl text-blue-500 font-bold'>Hunter.</span>
        </h1>
      </div>
      {/* <Image
        src='/public/about02.png'
        width={500}
        height={500}
        alt="image"
      /> */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl underline font-bold my-5">Popular Blogs</h1>
        <div className="grid grid-cols-2 gap-6 my-5">
        <div className="w-[21rem] border-2 border-solid border-gray-300 rounded-xl p-4">
          <h1 className="font-semibold text-lg">How to learn JavaScript in 2022?</h1>
          <p>
            Learning JavaScript in 2022 requires a combination of theory and practical applications. <span><a href="https://techbootcamps.utexas.edu/blog/best-ways-to-learn-javascript/"><i className="ri-arrow-right-line"></i></a></span> 
          </p>
        </div>
        <div className="w-[21rem] border-2 border-solid border-gray-300 rounded-xl p-4">
          <h1 className="font-semibold text-lg">How to learn JavaScript in 2022?</h1>
          <p>
            Learning JavaScript in 2022 requires a combination
            {/* <span id="more-text" className={isMoreTextVisible ? 'block':'hidden'}>of theory and practical applications of theory and practical applications of theory and practical applications of theory and practical applications of theory and practical applications of theory and practical applications </span>  */}
          </p>
        </div>
        <div className="w-[21rem] border-2 border-solid border-gray-300 rounded-xl p-4">
          <h1 className="font-semibold text-lg">How to learn JavaScript in 2022?</h1>
          <p>
            Learning JavaScript in 2022 requires a combination of theory and practical applications. 
          </p>
        </div>
        <div className="w-[21rem] border-2 border-solid border-gray-300 rounded-xl p-4">
          <h1 className="font-semibold text-lg">How to learn JavaScript in 2022?</h1>
          <p>
            Learning JavaScript in 2022 requires a combination of theory and practical applications. 
          </p>
        </div>
      </div>
      </div>
    </main>
    </div>
  )
}