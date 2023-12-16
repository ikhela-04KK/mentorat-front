// content the future flaatiing label when with on message who user have send. 

import { BtnSign } from '@/features/ui/buttons/btn-sign'
import { TextMessage } from '@/features/ui/text-field/text-entry-sign'
import React, { useState } from 'react'
import Image from "next/image";
import { Online } from '@/features/ui/avatar/online/online';
import { MessageContent } from '../../conversation/chatBox/message-content';


type IProps = {
  label: string,
  content?: string,
  modal: boolean,
  flag: boolean,
  chatbox: boolean,
  source: string | undefined,
  type?: "submit" | "reset" | "button"
  setMessage: (message: string) => void;
}

console.log(1)
const FloatChat: React.FC<IProps> = ({ label, type, modal, flag, chatbox, source, setMessage }) => {
  const [localMessage, setLocalMessage] = useState('');
  function handleHandleSendMessage() {
  }

  debugger
  return (
    <div className="shadow-2xl bg-gray-900 w-[560px] h-[276px] flex flex-col items-center justify-center rounded-xl border border-gray-800">

      <div className="relative w-full h-[72px] pt-1 pr-4 flex justify-between gap-4">
        <div className="relative flex">
          {modal && (
            <div className='absolute w-[150px]'>
              <Image width={216} height={216} alt={"spiral"} src="/spiral.svg" />
            </div>
          )}
          {flag && (
            <div className="relative left-2.5 top-2.5 w-12 h-12 p-3 rounded-[10px] border border-zinc-700 flex">
              <Image width={24} height={24} alt={"flag"} src="/flag.svg" />
            </div>
          )}
          <div className='mr-3'>
            <Online person={''} source={source} online={false} />
          </div>
        </div>

        <div className=''>
          <Image width={40} height={40} alt={'une croix'} src="/croix.svg" />
        </div>

      </div>

      {/* label for message */}
      {chatbox && (
        <div className='flex items-center justify-center'>
          <MessageContent backgroundColor={'violet-500'} extendsClass={'w-[336px] h-[84px] border border-violet-400'} />
        </div>
      )}

      {/* text-input and button for sending message  */}
      <div className='flex gap-3 items-center justify-center pt-8'>
        <TextMessage onChange={(e) => setLocalMessage(e.target.value)} name={'message'} placeholder={'message...'} taille={{ w: 'w-[370px] ', h: 'h-11' }} />
        <BtnSign onClick={handleHandleSendMessage} label={label} type={type} taille={{ w: 'w-[98px]', h: 'h-11' }} />
      </div>
    </div>
  )
}

export default FloatChat;