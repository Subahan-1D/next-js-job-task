import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "Enter Password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser.password === password) {
            return currentUser;
          }
        }
        return null;
      },
    }),
  ],
});

const users = [
  {
    id: 1,
    name: "Subahan",
    email: "s@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Shakil",
    email: "sakil@gmail.com",
    password: "password",
  },
  {
    id: 3,
    name: "Ravi",
    email: "R@gmail.com",
    password: "password",
  },
];

export { handler as GET, handler as POST };