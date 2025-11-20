import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            // STRICT SECURITY: Only allow the specific admin email
            const allowedEmail = process.env.ADMIN_EMAIL;
            if (user.email === allowedEmail) {
                return true;
            }
            return false; // Block everyone else
        },
    },
    pages: {
        error: '/error',
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
