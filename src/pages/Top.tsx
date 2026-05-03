import { BasicButton } from '@naru/untitled-ui-library';
import { toPng } from 'html-to-image';
import { useRef } from 'react';

export function Top() {
  const profileRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!profileRef.current) return;
    const dataUrl = await toPng(profileRef.current);
    const link = document.createElement('a');
    link.download = 'profile.png';
    link.href = dataUrl;
    link.click();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <div ref={profileRef} style={{ width: 960, height: 540 }} className="bg-white border border-miku p-4"></div>
      <BasicButton type="button" onClick={handleDownload}>
        画像として保存
      </BasicButton>
    </main>
  );
}
