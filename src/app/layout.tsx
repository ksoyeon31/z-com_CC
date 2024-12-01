// import AuthSession from "./_component/AuthSession";
// import { MSWComponent } from "./_component/MSWComponent";
// import "./globals.css";
// import {Inter} from 'next/font/google';

// const inter = Inter({subsets: ['latin']})

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode,
// }>) {
//   return (
//     <html>
//       <body className = {inter.className}>
//         <MSWComponent />
//         <AuthSession>
//         {children}
//         </AuthSession>
//         {/* children을 authsession으로 감싸주면 어디서든 useSession을 사용할 수 있음 */}
//       </body>
//     </html>
//     // RootLayout은 app 디렉토리의 최상위 레이아웃으로, 무조건 <html>과 <body> 태그를 반드시 포함해야함
//     // 오직 루트 레이아웃만 이 태그들을 포함할 수 있으며, 다른 하위의 레이아웃은 이 태그들을 포함할 수 없음
//     // 루트 레이아웃은 반드시 서버 컴포넌트여야함 클라이언트 컴포넌트로 전환해선 안되며, 하위 레이아웃들은 클라이언트 컴포넌트로 전환해도 됨
//   );
// }

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MSWComponent } from '@/app/_component/MSWComponent';
import AuthSession from '@/app/_component/AuthSession';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
