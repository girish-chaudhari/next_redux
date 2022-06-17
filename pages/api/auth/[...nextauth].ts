import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    maxAge: 30
  },
  secret: "secret_token",
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(" =>", { user, account, profile, email, credentials })
      return true
    },
    async redirect({ url, baseUrl }) {
      if (url === '/user') {
        return Promise.resolve('/')
      }
      return Promise.resolve('/')
    },
    async jwt({ user, token, profile, isNewUser, account }) {
      console.log('jwt middleware =>', token)
      return token
    }
  }
});
