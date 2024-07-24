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
  
</div>  
    </div>
  )
}

export default CandidateCard