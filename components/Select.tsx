import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Select as S, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel, SelectGroup } from './ui/select'

const Select = () => {
  return (
       <div className="flex items-center justify-between">
               <div className="flex gap-4 justify-between items-center">
                  <Label>Search</Label>
                  <Input placeholder="Enter your first name" />
               </div>
              <div>
    <S>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>All</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </S>

               </div>
            </div>
  )
}

export default Select