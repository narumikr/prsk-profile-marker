import { BasicButton } from '@naru/untitled-ui-library';
import { toPng } from 'html-to-image';
import { useRef } from 'react';
import { BasicIntroductionCard } from '@/components/templates/BasicIntroductionCard';
import { TOP_PAGE_TEXT } from '@/constant/pages.constant';

export function Top() {
  const profileRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!profileRef.current) return;
    try {
      const dataUrl = await toPng(profileRef.current);
      const link = document.createElement('a');
      link.download = TOP_PAGE_TEXT.profileFileName;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error(TOP_PAGE_TEXT.genImageErrorLog, error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6">
      <BasicIntroductionCard ref={profileRef} />
      <BasicButton type="button" onClick={handleDownload}>
        {TOP_PAGE_TEXT.saveImageButtonLabel}
      </BasicButton>
    </main>
  );
}
