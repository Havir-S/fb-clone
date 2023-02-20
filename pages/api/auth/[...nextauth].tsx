import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Enable debug messages in the console if you are having problems
  debug: false,
})
