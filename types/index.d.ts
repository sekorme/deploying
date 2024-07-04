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