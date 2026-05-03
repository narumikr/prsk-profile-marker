import { BasicButton } from '@naru/untitled-ui-library';
import html2canvas from 'html2canvas';
import { useRef } from 'react';

export function Top() {
  const profileRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!profileRef.current) return;
    const canvas = await html2canvas(profileRef.current, { scale: 1 });
    const link = document.createElement('a');
    link.download = 'profile.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <div ref={profileRef} style={{ width: 960, height: 540 }} className="bg-white border border-miku"></div>
      <BasicButton type="button" onClick={handleDownload}>
        画像として保存
      </BasicButton>
    </main>
  );
}
