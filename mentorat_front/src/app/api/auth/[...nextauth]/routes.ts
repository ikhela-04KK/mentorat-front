import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// // credentials type 
// type credentials =  {
//     username: {
//         label: string,
//         type: string,
//         placeholder: string,
//     },
//     password: { 
//     label: string, 
//     type: string
// }
// }


export const authOptions: NextAuthOptions = {
    session:{
        strategy:'jwt'
    },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith"
        },
        password: { 
            label: "Password", 
            type: "password" 
        }
      },
      async authorize(credentials:CredentialsProvider, req:Request) {
        if (!credentials?.username || !credentials?.password) return null;
        const { username, password } = credentials;
        const res = await fetch(Backend_URL + "/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status == 401) {
          console.log(res.statusText);

          return null;
        }
        const user = await res.json();
        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };