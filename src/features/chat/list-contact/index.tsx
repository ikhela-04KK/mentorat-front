"use client";
import Image from 'next/image';
import Link from 'next/link';


import { faker } from '@faker-js/faker';
import HeaderChat from '../header-chat';
import { useSession } from 'next-auth/react';
import { Dropdown } from '@/features/ui/header/profile/dropdown/dropdown';
import { useState } from 'react';

type User ={
  avatar:string, 
  username:string
}




export default function Contact() {

    const { data: session,status } = useSession();
    console.log(session?.user) 
    console.log(status) 

  function createRandomUser(): User{
    return {
      avatar: faker.image.avatar(), 
      username: faker.internet.userName()
    }
  }
  const USERS: User[] = faker.helpers.multiple(createRandomUser,{
    count:100
  })

  const [clicked, setCliked] = useState(false); 

  function handleClicked(e:React.MouseEvent<HTMLElement,MouseEvent>){
    setCliked((prevClicked) => !prevClicked)    }

// N'importe sur le clik permet de fermer la boites modal
function handleMainClick(){
    if (clicked){
        setCliked(false)
    } 
}


  return (
    <>
            <header className="bg-[#0c111D] flex text-white items-center border-r border-b border-r-[#1F242F] border-b-[#1f242f]">
            <HeaderChat title="logo" size={40} source={session?.user.avatar} label="" nofification={0} /> 
            <div onClick={(e) => handleClicked(e)} className="block cursor-pointer" >  
                                    <Image className="absolute right-[50px] top-[35px]" src={"/dots-vertical.svg"} width={20} height={20} alt="dropdown" />
                                    <Dropdown visible={ clicked ? 'block' : ''}/>
                                </div>
    </header>

    <main onClick ={handleMainClick}  className="bg-[#0c111D] h-screen flex justify-center items-center content-center flex-col gap-y-1">


  
      {/* Dropdown menu */}
      <div id="dropdownSearch" className="z-10 bg-[#0c111D] rounded-lg shadow w-60 border border-gray-500">
        <div className="p-3">
          <label htmlFor="input-group-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search user" />
          </div>
        </div>

      {/* contient la liste des utilsiateurs */}
        <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-100 " >
          { USERS.map((USER,index) =>(

          // contient un seul utilisateur 
          <li key={index}>
            <div className="peer flex items-center ps-2 rounded hover:bg-gray-100 hover:text-gray-800">
                {/* <input id="peer-checked checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/> */}
                <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <Image className="w-6 h-6 me-2 rounded-full" src={USER.avatar} alt="Jese image" width={24} height={24} />
                    {USER.username}
                </Link>
            </div>
          </li>
          )
          )}
          {/* ... (Repeat the pattern for other list items) ... */}
        </ul>

        <Link className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 hover:underline" href={''}>
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
          </svg>
         {" Delete users"} 
        </Link>
      </div>
    </main>
    </>
  )
}