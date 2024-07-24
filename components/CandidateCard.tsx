import Image from "next/image"


interface Emage{
    image?: string
    name?:string
    pvotes?: number|string
   
}
const CandidateCard = ({image,pvotes, name}:Emage) => {
  return (
    <div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full ">
  <div
    className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40  h-60">
    <Image 
      width={100}
      height={50}
      src={`/${image}`}
      alt="card-image" className="w-full  h-full"/>
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-3">
      <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-green-600">
       {name}
      </h5>
      <p
        className="flex items-center justify-center text-xl gap-1.5 font-sans  font-bold p-2 bg-gray-300 rounded-xl shadow-2xl leading-relaxed text-blue-gray-900 antialiased">
       <Image src="/ballot-box.png" width={40} height={40} alt="voting"/>
        {pvotes}
      </p>
    </div>
 
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div>  
    </div>
  )
}

export default CandidateCard