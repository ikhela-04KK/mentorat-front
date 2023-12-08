// content the future flaatiing label when with on message who user have send. 


import {  BtnSign } from '@/features/ui/buttons/btn-sign'
import { TextMessage } from '@/features/ui/text-field/text-entry-sign'
import React, { useState } from 'react'
import {  MessageContent } from '../../conversation/message-info'
import Image from "next/image";
import { Online } from '@/features/ui/avatar/online/online';

/** I) Au clique sur le message d'un autre utilisateur 
 * Au clique sur un message provenant d'un autre utilisateur avec qui on communique 
 * 1- afficher un floating label contenant le message sur lequel on a cliqué 
 * 2- mettre le contenu sur lequel le floating apparait en flou 
 * 3- afficher dans le floating le message sur lequel on a cliqué et aussi un champ texte et un bouton confirm 
 * 4- après envoi du message retourner au chatBox tout en incluant la reponse qu'on a fournir dans le floating chat associé au chat 
 * 
 * II) au survol sur son propre message 
 * Au survol sur son propre message afficher un label contenant en haut du message contenant un bouton copy , un boutton modifier , un boutton suprimé , un boutton pour les icone 
 * 
 */
type IProps ={
  label:string, 
  content:string,
  modal:boolean, 
  flag:boolean,
  chatbox:boolean,
  source:string |undefined,
  setMessage: (message:string) => void;
}


const FloatChat:React.FC<IProps> = ({label,content,modal,flag,chatbox,source,setMessage}) => {
  
  //  console.log("voici le contenu du message ", message)
  return (
    <div className="shadow-xxl bg-gray-900 w-[560px] h-[276px] flex flex-col items-center justify-center rounded-xl border border-gray-800">

      {/* icon label and icone for discard sending message */}
      <div className="relative w-full h-[72px] pt-1 pr-4 flex justify-between gap-4">
        <div className="relative flex">
        { modal &&(
          <div className='absolute w-[150px]'>
          <Image  width={216} height={216} alt={"spiral"} src="/spiral.svg" />
          </div>
      )}
      {flag && (
          <div className="relative left-2.5 top-2.5 w-12 h-12 p-3 rounded-[10px] border border-zinc-700 flex">
          <Image  width={24} height={24} alt={"flag"} src="/flag.svg" />
          </div>
        )}
        <Online person={''} source={source} online={false} />
        </div>

        <div className=''>
          <Image width={40} height={40} alt={'une croix'} src="/croix.svg" />
        </div>

      </div>

      {/* label for message */}
      {chatbox && (
      <div className='flex items-center justify-center'>
        <MessageContent content={content} backgroundColor={'violet-500'} extendsClass={'w-[336px] h-[84px] border border-violet-400'} />
      </div>
      )}

      {/* text-input and button for sending message  */}
      <div className='flex gap-3 items-center justify-center pt-8'>
          <TextMessage onChange={(e) =>setMessage(e.target.value)} name={'message'} placeholder={'message...'} taille={{w:'w-[370px] ',h:'h-11'}}  />
          <BtnSign label={label} taille={{w:'w-[98px]', h:'h-11'}} />
      </div>
    </div>
  )
}

export default FloatChat;