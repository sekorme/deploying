
import Image from 'next/image'

import { useRouter } from 'next/navigation'

const Footer = ({ type='desktop'}: FooterProps) => {
    const router = useRouter()
   const handleLogOut = async() =>{
    
    
      router.push('/sign-in')
    
   }
  
  return (
    <footer className="footer">
        <div className={type === 'mobile' ? 'footer_name_mobile' : 'footer_name'}>
             <p className="text-xl font-bold text-gray-700">A</p>
        </div>
        
    <div className={type === 'mobile' ? 'footer_email_mobile' : 'footer_email'}>
     
        <p className="text-14 truncate font-normal text-gray-600">
            alex@gmail.com
        </p>
    </div>
    <div className="footer_image" onClick={handleLogOut}>
     <Image src="/log-out.svg" fill alt="jsm"/>
    </div>
    </footer>
  )
}

export default Footer