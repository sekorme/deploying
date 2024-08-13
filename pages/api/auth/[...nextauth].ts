import NextAuth, {getServerSession} from "next-auth"
import {AuthOptions} from "next-auth";
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/utils/prismadb";


export const authOptions: AuthOptions ={
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name: 'credentials',
          credentials:{
            username: {label: 'Username', type:'text', placeholder: 'Username'},
            password:{label: 'Password', type:'password', placeholder: 'password'}
          },

        

          async authorize(credentials){
          

            if (!credentials?.username || !credentials?.password) {
              throw new Error('Invalid Credentials');
            }

            const user = await prisma.user.findUnique({
              where: { username: credentials.username }
            });

            if (!user || !user?.hashedPassword) {
              throw new Error('Invalid Credentials');
            }

            const isCorrectPassword = await bcrypt.compare(
                credentials.password, 
                user.hashedPassword
            )

            if(!isCorrectPassword){
                throw new Error('invalid Credentials')
            }


            return user
            }
        })],
      
         pages:{
                signIn:'/'
        },
        debug: process.env.NODE_ENV === 'development',
          session:{
            strategy: 'jwt',
            maxAge: 28800 //8 hours
           
        },
        secret: process.env.NEXTAUTH_SECRET
        
}

export default NextAuth(authOptions)