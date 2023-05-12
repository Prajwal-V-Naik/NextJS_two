import 'remixicon/fonts/remixicon.css'
import Link from 'next/link'


export default function Blog(){
  return(
    <>
      <Link href='/'><i className='ri-arrow-left-line text-lg'>Home</i></Link>
      <div 
      className="flex flex-col items-center justify-center min-h-screen"
      >
        <button 
        className="text-3xl font-semibold transition duration-150 ease-out hover:ease-in p-4 border-2 border-gray-300 rounded-lg bg-gray-100"
        >
          Hello blog writer
        </button>
    </div>
    </>
  )
}