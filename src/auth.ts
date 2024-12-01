import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup',
  },
  providers: [
    //authjs 에서 제공하는 credential 코드
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text' }, // 사용자 입력 필드 정의
        password: { label: 'Password', type: 'password' }, // 사용자 입력 필드 정의
      },
      async authorize(credentials) {
        // 로그인 API 호출
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: credentials?.username, // credentials가 undefined일 가능성을 체크
            password: credentials?.password, // credentials가 undefined일 가능성을 체크
          }),
        });

        if (!authResponse.ok) {
          return null; // 인증 실패 시 null 반환
        }

        const user = await authResponse.json();
        console.log('user', user);

        // 인증 성공 시 사용자 객체 반환
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
