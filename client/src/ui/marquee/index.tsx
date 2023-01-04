import { FC } from 'react';
import { IProps } from './props';
import { MarqueeWrapper, MarqueeTextWrapper, MarqueeText } from './styles';

export const Marquee: FC<IProps> = ({ variant, children }) => {
  return (
    <MarqueeWrapper variant={variant}>
      <MarqueeTextWrapper>
        <MarqueeText variant={variant}>{children}</MarqueeText>
        <MarqueeText variant={variant}>{children}</MarqueeText>
      </MarqueeTextWrapper>
    </MarqueeWrapper>
  );
};
