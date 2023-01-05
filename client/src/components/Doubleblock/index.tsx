import { FC } from 'react';
import {
  BlockWrapper,
  ContentWrapper,
  InformationWrapper,
  BlockDescription,
  ButtonWrapper,
  ImageWrapper,
  PictureContent,
  ImageSquare,
  StickerWrapper,
  StickerContent,
} from './styles';
import { IProps } from './props';
import { Images } from 'assets';
import { Button, Title } from 'ui';

export const Doubleblock: FC<IProps> = ({
  variant,
  title,
  buttonText,
  // image,
  marker,
  reverse,
  children,
  onClick,
}) => {
  return (
    <BlockWrapper>
      <ContentWrapper reverse={reverse} variant={variant}>
        <InformationWrapper>
          {title && <Title>{title}</Title>}
          {children && <BlockDescription>{children}</BlockDescription>}
        </InformationWrapper>
        {buttonText && (
          <ButtonWrapper>
            <Button
              variant={variant}
              shadow={
                variant === 'primary' || !variant ? 'secondary' : 'primary'
              }
              onClick={onClick}>
              {buttonText}
            </Button>
          </ButtonWrapper>
        )}
      </ContentWrapper>
      <ImageWrapper variant={variant}>
        <PictureContent>
          <ImageSquare src={Images.MasterClassImage} />
          {marker && (
            <StickerWrapper>
              <StickerContent>{marker}</StickerContent>
            </StickerWrapper>
          )}
        </PictureContent>
      </ImageWrapper>
      {/* {image && <ImageWrapper>{image}</ImageWrapper>} */}
    </BlockWrapper>
  );
};
