import { SekaiBackground, SideMenu } from '@naru/untitled-ui-library';
import { useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SekaiBackground bgOpacity={0.2} />
      <SideMenu open={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <p>メニュー</p>
      </SideMenu>
      <div
        className={`transition-[margin-left,width] duration-300 ease-out ${isOpen ? 'ml-[250px] w-[calc(100vw-250px)]' : 'ml-[60px] w-[calc(100vw-60px)]'}`}>
        {children}
      </div>
    </>
  );
}
