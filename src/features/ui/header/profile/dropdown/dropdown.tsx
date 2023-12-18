"use client";
import React from "react";
import Link from "next/link";

interface visibleProps {
    visible: string
}

export const Dropdown: React.FC<visibleProps> = ({ visible }) => {
    return (
        <>
            <div
                id="dropdownDots"
                className={`absolute top-[5px]  right-[25px] z-10 ${visible ==="block" ? 'block':'hidden'} border-2 border-gray-800  shadow-xl w-44 bg-transparent overflow-hidden rounded-lg `}
            >
                <ul
                    className=" text-sm text-white "
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <li className="hover:bg-white hover:text-gray-700  " >
                        {/* Utilisez Link au lieu de <a> */}
                        <Link href="/dashboard"
                            className="block px-4 py-2 ">
                            Bloquer
                        </Link>
                    </li>
                    <li className="hover:bg-white hover:text-gray-700   ">
                        {/* Utilisez Link au lieu de <a> */}
                        <Link href="/settings"
                            className="block px-4 py-2 ">
                            Signaler
                        </Link>
                    </li>
                    <li className="hover:bg-white hover:text-gray-700   ">
                        {/* Utilisez Link au lieu de <a> */}
                        <Link href="/earnings"
                            className="block px-4 py-2 ">
                            Voir profil
                        </Link>
                    </li>
                    <li className="shadow-lg hover:bg-red-200  bg-red-800  ">
                        {/* Utilisez Link au lieu de <a> */}
                        <Link href="/api/auth/signout" className="block p-4 text-sm text-white hover:text-gray-700 ">
                            Deconnexion
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    );
};
