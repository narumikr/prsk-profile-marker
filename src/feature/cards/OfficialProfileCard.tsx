import { forwardRef } from 'react';
import officialProfile from '@/assets/official-profile.jpg';
import { OFFICIAL_CARD_HEIGHT, OFFICIAL_CARD_WIDTH } from '@/constant/cards.constant';
import { useCardScale } from '@/hooks/useCardScale';

export const OfficialProfileCard = forwardRef<HTMLDivElement>((_, ref) => {
  const { wrapperRef, scale } = useCardScale(OFFICIAL_CARD_WIDTH);

  return (
    <div ref={wrapperRef} className="w-full" style={{ maxWidth: OFFICIAL_CARD_WIDTH, height: OFFICIAL_CARD_HEIGHT * scale }}>
      <div
        data-card-content="true"
        ref={ref}
        style={{
          width: OFFICIAL_CARD_WIDTH,
          height: OFFICIAL_CARD_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'relative',
        }}>
        <img
          src={officialProfile}
          alt="公式プロフィールカード"
          style={{ width: OFFICIAL_CARD_WIDTH, height: OFFICIAL_CARD_HEIGHT, objectFit: 'cover' }}
        />
      </div>
    </div>
  );
});

OfficialProfileCard.displayName = 'OfficialProfileCard';
