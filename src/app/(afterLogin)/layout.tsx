import {ReactNode} from 'react';
import style from '@/app/(afterLogin)/layout.module.css';

export default async function HomeLayout({children}: {children: ReactNode}) {
    return (
      <div className = {style.container}>
        <header className = {style.leftSectionWrapper}>

        </header>
        <div className = {style.rightSectionWrapper}>

        </div>
        {children}
      </div>
    );
  }
  