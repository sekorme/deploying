import React from "react"


interface UserProps{
    data: any
}


const UserTable : React.FC<UserProps> = ({data}) =>{
    return (
       <div
  className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <table className="w-full text-left table-auto min-w-max">
    <thead className="bg-stone-300">
      <tr>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Name
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Username
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Phone
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Action</p>
        </th>
      </tr>
    </thead>
    <tbody>
    
    {
        data.map((d:any) =>(
        <tr key={d.id}>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {d.name}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {d.username}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {d.phone}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
            Edit
          </a>
        </td>
      </tr>
        ))
    }
     
      
    </tbody>
  </table>
</div>
    )
}

export default UserTable