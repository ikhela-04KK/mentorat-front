// import { Backend_URL } from "@/app/lib/Constants";
// import {NextAuthOptions} from "next-auth"; 
// import CredentialsProvider from 'next-auth/providers/credentials'; 


// export const authOption: NextAuthOptions = {
//     providers:[
//         CredentialsProvider({
//             name:"Credentials", 
//             credentials:{
//                 username:{
//                     label:"Entrer votre email", 
//                     type:"email",
//                     placeholder:"Entrer votre "
//                 },
//                 password:{
//                     label:"Entrer votre mot de passe",
//                     type:"password",
//                     placeholder:"••••••••••"
//                 }

//             }, 
//             // 
//             async authorize(credentials, req) {

//                 // You need to provide your own logic here that takes the credentials
//                 if(!credentials?.username || !credentials?.password) return null; 
//                 const { username, password } = credentials;
//                 const res = await fetch(`${Backend_URL}auth/login`), {
//                     method:'POST',
//                     body: JSON.stringify(credentials),
//                     headers: { "Content-Type": "application/json" }
//                   }

//                     // If no error and we have user data, return it
//                         // if (res.ok && user) {
//                     //   return user
//                     // }
//                   if (res.status === 401){
//                     console.log(res.statusText)
//                   }
//                   const user  =await res.json(); 
//                   return user;
          
//               }
//         })
//     ]
// }

// export handler = NextAuth(authOptions); 
// export {handler as GET, handler as POST}; 

