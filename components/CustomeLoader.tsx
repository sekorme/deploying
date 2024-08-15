
import Image from "next/image";

const CustomeLoader = () => {
    return(
        <Image src="/logo1.svg" alt="Menu Icon" width={50} height={50} className="rounded-full animate-spin"/>
    )
}
export default CustomeLoader;