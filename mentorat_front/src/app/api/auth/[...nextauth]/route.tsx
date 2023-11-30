import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


// ajout du refresh token 
async function refreshToken(token: JWT): Promise<JWT> {
    const res = await fetch(Backend_URL + "/auth/refresh", {
        method: "POST",
        headers: {
            authorization: `Refresh ${token.backendToken.refreshToken}`,
        },
    });
    console.log("refreshed");

    const response = await res.json();

    return {
        ...token,
        backendToken: response,
    };
}

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
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
            async authorize(credentials, req) {
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
                    console.log("error handling ")
                    console.log(res.statusText);
                    return null;
                }
                const user = await res.json();
                console.log("no error handling")
                console.log(user);
                return user;
            },
        }),
    ],

    //essyae  regler les solutions de la session.user null
    // il faut mettre en place un callback 
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };
            if (new Date().getTime() < token.backendToken.expiresIn)
                return token;
            return await refreshToken(token);

        },
        async session({ token, session }) {
            session.user = token.user;
            session.backendToken = token.backendToken;
            return session;
        },
    },
    pages: {
        signIn: '/login',
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }

};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };