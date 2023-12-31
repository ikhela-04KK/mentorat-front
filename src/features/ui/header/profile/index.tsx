"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Standard } from "../../avatar/standard/standard";

type person = {
    label: string;
    source?:string;
    notification:number;
    onClick?:()=>void

};





const Avatar: React.FC<person> = ({label, source,notification}) => {
    const listIcon = [
        {
            person: "search",
            size: 40,
            source:"/search.svg",   
            onClick:() => setShowSearch(true),
        },
        {
            person: "seeting",
            size:40,
            source:"seeting.svg",
        },
    
    ];
    const [showSearch, setShowSearch] = useState(false)

    const handleSearchClick = ()=>{
        setShowSearch(true);
    }
    const handleBackClick =()=>{
        setShowSearch(false);
    }
    return (
        <>
          <Standard label={label} source={source} />
    
          {showSearch ? (
            <div>
              {/* Zone de texte ou composant de recherche à afficher */}
              <input type="text" placeholder="Search..." />
              {/* Ajoutez d'autres éléments ou composants pour la zone de recherche */}
              <button onClick={handleBackClick}>Retour</button>
            </div>
          ) : (
            <div className="flex items-center">
              {listIcon.map((item, idx) => (
                <Image
                  key={idx}
                  className="p-2"
                  width={item.size}
                  height={item.size}
                  src={item.source}
                  alt={item.person}
                  //onClick={item.person === 'search' ? handleSearchClick : item.onClick}
                  onClick={item.onClick}
                />
              ))}
              <div className="ml-1 relative">
                <span className="absolute left-4 w-6 h-6 px-1 bg-red-700 rounded-full inline-flex justify-center items-center">
                  <span className="text-white text-xs font-medium">{notification}</span>
                </span>
                <Image
                  className="p-2"
                  width={40}
                  height={40}
                  src={"/notification.svg"}
                  alt={"notification"}
                />
              </div>
            </div>
          )}
        </>
      );
};
export default Avatar;
