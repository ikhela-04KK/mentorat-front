"use client";
import Image from 'next/image';
import Link from 'next/link';
import HeaderChat from '../header-chat';
import { getSession, useSession } from 'next-auth/react';
import { Dropdown } from '@/features/ui/header/profile/dropdown/dropdown';
import { useState, useEffect } from 'react';
import { SignalGreen } from '@/features/ui/badge/green-sign';
import FloatChat from '../float-options/float-chat/float-chat';
import { useSocket } from '@/features/providers/socketProvider';
import { useRouter } from 'next/navigation';


type user = {
  id: number,
  name: string,
  avatar: string,
  email: string,
}

type userSokcet = {
  idSocket: string | number,
  idUser: number,
  name: string,
}

export default function Contact() {
  const socket = useSocket();
  const [userDatabase, setUserDatabase] = useState<user[]>()
  const [userSocket, setUserSocket] = useState<userSokcet[]>()

  const Router = useRouter()


  // Afficher la liste de utilisateurs connectés
  useEffect(() => {
    if (socket) {
      socket.connect();
      socket.on('users', (data) => {
        console.log('Message from socket:', data);
        setUserSocket(data)
      });
    }
  }, [socket]);

  // to make a request to dataabse for sending all users in my database 
  useEffect(() => {

    async function userSend() {
      const session = await getSession();
      console.log(session?.user)

      try {
        const options = {
          method: "GET",
        };

        const user = await fetch(`http://localhost:8000/chats/contacts/${session?.user.id}`, options);
        const result = await user.json();

        console.log('Message from server:');
        console.log(result);

        // Vérifier si le composant est toujours monté avant de mettre à jour l'état
        setUserDatabase(result);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Gérer l'erreur selon vos besoins
      }
    };
    userSend();
  }, []);


  const [clicked, setCliked] = useState(false);

  function handleClicked(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    setCliked((prevClicked) => !prevClicked)
  }

  function handleMainClick() {
    if (clicked) {
      setCliked(false)
    }
  }
  const { data: session, status: status } = useSession()
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState<user>()


  const handleClick = (e:React.MouseEvent<HTMLLIElement, MouseEvent>, user:user, index:number) => {
    // Mettez à jour l'état pour afficher la boîte modale
    setShowModal(true);
    setShowInfo(user)
  };

  const closeModal = () => {
    // Mettez à jour l'état pour masquer la boîte modale
    setShowModal(false);
  };

  // useEffect to send message 
    const [sms, setMessage] = useState(''); 

    console.log("entrer here")
    console.log(sms); 



  useEffect(()=>{
    async function envoie () {
      const session = await getSession();
      console.log(session?.user)
        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: `chat ${session?.user.name} with ${showInfo?.name}`,
              content:sms ,
              to: showInfo?.id,
            }),
          }
        const message = await fetch(`http://localhost:8000/chats/user/${session?.user.id}`, options);

        if (message.ok){
          const result = await message.json();
          console.log('Message from server:');
          console.log(result);
          Router.push("/chat")
        }
    } catch(error){
      console.log(error)
    } 
  }
    if (sms !== '' && session?.user.id !== undefined && showInfo?.id !==undefined) {
      envoie()
    }
}),[sms]



  return (
    <>
      <header className="bg-[#0c111D] flex text-white items-center border-r border-b border-r-[#1F242F] border-b-[#1f242f]">
        <HeaderChat title="logo" size={40} source={session?.user.avatar} label="" nofification={0} />
        <div onClick={(e) => handleClicked(e)} className="block cursor-pointer" >
          <Image className="absolute right-[50px] top-[35px]" src={"/dots-vertical.svg"} width={20} height={20} alt="dropdown" />
          <Dropdown visible={clicked ? 'block' : ''} />
        </div>
      </header>

      <main onClick={handleMainClick} className="bg-[#0c111D] h-screen flex justify-center items-center content-center flex-col gap-y-1">
        {/* Dropdown menu */}
        <div id="dropdownSearch" className="z-10 bg-[#0c111D] rounded-lg shadow w-60 border border-gray-500">
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search user" />
            </div>
          </div>

          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-100">
            {userDatabase?.map((user, index) => (
              <li key={index} onClick={(e) => handleClick(e,user, index)}> 
                <div className="relative cursor peer flex items-center ps-2 rounded hover:bg-gray-100 hover:text-gray-800">
                  <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <Image className="w-6 h-6 me-2 rounded-full" src={`/${user.avatar}`} alt="Jese image" width={24} height={24} />
                    {user.name}
                  </Link>

                  {userSocket && (
                    <div className="absolute bottom-1 left-10">
                      {!userSocket.some((socketUser) => socketUser.idUser === user.id) ? (
                        <SignalGreen online={false} />
                      ) : (
                        <SignalGreen online={true} /> 
                      )}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-blur-sm bg-gray/30">
            {/* Contenu de la boîte modale */}
            <FloatChat setMessage={setMessage} label='envoyer' type='button' modal={false} flag={false} chatbox={false} source={showInfo?.avatar}/>
            <button type='reset' className="bg-red p-10" onClick={closeModal}>Fermer</button>
        </div>
      )}


          {/* <input id="peer-checked checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/> */}
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
