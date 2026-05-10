import { useRef, useState } from 'react';
import { ImageUploaderText } from '@/constant/components.constant';
import { useSekaiColor } from '@/hooks/useSekaiColor';

interface ImageUploaderProps {
  shape?: 'rectangle' | 'circle';
}

export const ImageUploader = ({ shape = 'rectangle' }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const readFileAsDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
          return;
        }
        reject(new Error('画像データの読み込み結果が不正です'));
      };
      reader.onerror = () => reject(reader.error ?? new Error('画像データの読み込みに失敗しました'));
      reader.readAsDataURL(file);
    });

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  const handleSelectImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const nextUrl = await readFileAsDataUrl(file);
      setPreviewUrl(nextUrl);
    } catch (error) {
      console.error('画像プレビューの生成に失敗しました', error);
    }
    event.target.value = '';
  };

  const { text, border, ring } = useSekaiColor();
  const isCircle = shape === 'circle';
  const buttonClassName = isCircle
    ? `mx-auto flex h-48 w-48 cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-full transition focus:outline-none focus:ring-2 ${ring} ${
        previewUrl ? '' : `border-2 border-dashed ${border} bg-gray-300 hover:bg-gray-400`
      }`
    : `mx-auto flex aspect-video w-full max-w-3xl cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-xl transition focus:outline-none focus:ring-2 ${ring} ${
        previewUrl ? '' : `border-2 border-dashed ${border} bg-gray-300 hover:bg-gray-400`
      }`;

  return (
    <>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleSelectImage} />

      <button type="button" onClick={openFileDialog} className={buttonClassName}>
        {previewUrl ? (
          <img src={previewUrl} alt={ImageUploaderText.selectedAlt} className="h-full w-full object-cover" />
        ) : (
          <span className={`text-6xl font-bold leading-none ${text}`}>+</span>
        )}
      </button>
    </>
  );
};
