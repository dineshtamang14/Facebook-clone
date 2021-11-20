import NextAuth from "next-auth";
import Provider from "next-auth/providers";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Provider.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
});
