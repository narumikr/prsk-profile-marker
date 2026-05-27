import { type ColorsSekaiKey, SideMenu as SekaiSideMenu, useCreateSekai } from '@naru/untitled-ui-library';
import { Dropdown } from '@/components/molecules/Dropdown';
import { CardTypeDropdownItem, FontFamily, OshiDropdownItem } from '@/constant/sidemenu.constants';

const SideMenuText = {
  sekaiTheme: 'セカイテーマ',
  fontFamily: '文字フォント',
  cardType: 'カード種類',
} as const;

interface SideMenuProps {
  isOpen: boolean;
  onClick: () => void;
  onFontChange: (font: string) => void;
  onCardTypeChange: (cardType: string) => void;
}

export const SideMenu = ({ isOpen, onClick, onFontChange, onCardTypeChange }: SideMenuProps) => {
  const { switchSekaiColor } = useCreateSekai();

  const handleSwitchSekai = (value: string) => {
    switchSekaiColor?.(value as ColorsSekaiKey);
  };

  return (
    <SekaiSideMenu open={isOpen} onClick={onClick}>
      <Dropdown
        title={SideMenuText.cardType}
        options={CardTypeDropdownItem}
        onSelect={onCardTypeChange}
        defaultValue={CardTypeDropdownItem[0].value}
      />
      <Dropdown
        title={SideMenuText.sekaiTheme}
        options={OshiDropdownItem}
        onSelect={handleSwitchSekai}
        defaultValue={OshiDropdownItem[0].value}
      />
      <Dropdown
        title={SideMenuText.fontFamily}
        options={FontFamily}
        onSelect={onFontChange}
        defaultValue={FontFamily[0].value}
      />
    </SekaiSideMenu>
  );
};
