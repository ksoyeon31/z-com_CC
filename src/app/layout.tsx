import { MSWComponent } from "./_component/MSWComponent";
import "./globals.css";
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html>
      <body className = {inter.className}>
        <MSWComponent />
        {children}
      </body>
    </html>
    // RootLayout은 app 디렉토리의 최상위 레이아웃으로, 무조건 <html>과 <body> 태그를 반드시 포함해야함
    // 오직 루트 레이아웃만 이 태그들을 포함할 수 있으며, 다른 하위의 레이아웃은 이 태그들을 포함할 수 없음
    // 루트 레이아웃은 반드시 서버 컴포넌트여야함 클라이언트 컴포넌트로 전환해선 안되며, 하위 레이아웃들은 클라이언트 컴포넌트로 전환해도 됨
  );
}
