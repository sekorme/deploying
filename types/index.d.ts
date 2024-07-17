declare type User = {
    $id?: string;
    email?: string;
    userId?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
}



declare interface SiderbarProps{
    user: User;
}


declare interface FooterProps {
  
  type?: 'mobile' | 'desktop'
}

type SignUpParams =  {
  email: string
  name: string
  password: string
  phone?: string
}

declare interface signInProps {
  email: string;
  password: string;
}