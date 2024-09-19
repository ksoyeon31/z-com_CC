import LoginModal from '@/app/(beforeLogin)/_component/LoginModal';
//서버 컴포넌트는 클라이언트 컴포넌트를 import 해도 되는데 클라이언트 컴포넌트는 서버 컴포넌트를 import 해선 안됨

export default function Page() {
 
  return(
    <LoginModal />
  );
}