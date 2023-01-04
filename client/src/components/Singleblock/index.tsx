import { FC } from 'react';
import {
  BlockWrapper,
  ContentWrapper,
  BlockDescription,
  ImageWrapper,
} from './styles';
import { IProps } from './props';
import { Button, Title } from 'ui';

export const SingleBlock: FC<IProps> = ({
  title,
  buttonText,
  image,
  children,
  onClick,
}) => {
  return (
    <BlockWrapper>
      <ContentWrapper>
        {title && <Title>{title}</Title>}
        {children && <BlockDescription>{children}</BlockDescription>}
        {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
      </ContentWrapper>
      {image && <ImageWrapper>{image}</ImageWrapper>}
    </BlockWrapper>
  );
};
