import { forwardRef } from 'react';
import officialProfile from '@/assets/official-profile.jpg';
import { CoordInput } from '@/components/molecules/CoordInput';
import { OFFICIAL_CARD_HEIGHT, OFFICIAL_CARD_WIDTH, OfficialProfileCardInputLabels } from '@/constant/cards.constant';
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
        {/* MY PROFILE */}
        <CoordInput x={180} y={97} w={133} h={28} label={OfficialProfileCardInputLabels.name} />
        <CoordInput x={391} y={97} w={30} h={28} label="私の名前は" />
        <CoordInput x={441} y={97} w={30} h={28} label="私の名前は" />
        <CoordInput x={146} y={134} w={195} h={28} label="私の名前は" />
        <CoordInput x={146} y={169} w={195} h={28} label="私の名前は" />
        <CoordInput x={146} y={204} w={195} h={28} label="私の名前は" />
        <CoordInput x={146} y={239} w={195} h={28} label="私の名前は" />
        {/* MY FAVORITES */}
        <CoordInput x={92} y={333} w={146} h={34} label="私の名前は" />
        <CoordInput x={247} y={333} w={146} h={34} label="私の名前は" />
        <CoordInput x={403} y={333} w={146} h={34} label="私の名前は" />
        <CoordInput x={92} y={392} w={146} h={32} label="私の名前は" />
        <CoordInput x={247} y={392} w={146} h={32} label="私の名前は" />
        <CoordInput x={403} y={392} w={146} h={32} label="私の名前は" />
        {/* 連想する人を書いてね! */}
        <CoordInput x={92} y={482} w={146} h={37} label="私の名前は" />
        <CoordInput x={247} y={482} w={146} h={37} label="私の名前は" />
        <CoordInput x={403} y={482} w={146} h={37} label="私の名前は" />
        <CoordInput x={172} y={538} w={146} h={37} label="私の名前は" />
        <CoordInput x={328} y={538} w={146} h={37} label="私の名前は" />
        <CoordInput x={247} y={598} w={146} h={32} label="私の名前は" />
      </div>
    </div>
  );
});

OfficialProfileCard.displayName = 'OfficialProfileCard';
