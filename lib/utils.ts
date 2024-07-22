import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {z} from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const authFormSchema = (type : string) => z.object({
  email: z.string().email(),
  password: z.string().min(8),
 
  name: type=== "sign-in" ? z.string().optional() : z.string().min(3),

  phone: type=== "sign-in" ? z.string().optional() : z.string().min(3).max(50),
 
  
})



export const collateFormSchema = () => z.object({
  pollingStationName: z.string().min(3),
  ndcVotes: z.number(),
  nppVotes: z.number(),
  cppVotes: z.number(),
  totalVoteCast: z.number(),
  location: z.string().min(3),
  rejectedBallot: z.number(),
  turnedOut: z.number(),
 
})



export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));