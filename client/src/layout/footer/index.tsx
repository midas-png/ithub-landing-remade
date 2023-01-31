import {
  FooterWrapper,
  NavigationWrapper,
  SocialMediaWrapper,
  SocialLinksWrapper,
  RegistrationWrapper,
  NavigationColumnWrapper,
  NavigationColumnDescription,
  RegistrationDescription,
} from './styles';
import { FOOTER_NAVIGATION, SOCIAL_MEDIA_LINKS } from './data';
import { Title } from 'ui';

export const Footer = () => (
  <FooterWrapper>
    <NavigationWrapper>
      {FOOTER_NAVIGATION.map(({ title, navigation }, index) => (
        <NavigationColumnWrapper key={index}>
          <Title variant='secondary' heading='h4'>
            {title}
          </Title>
          {navigation.map(({ label }) => (
            <NavigationColumnDescription key={Math.random()}>
              {label}
            </NavigationColumnDescription>
          ))}
        </NavigationColumnWrapper>
      ))}
    </NavigationWrapper>
    <SocialLinksWrapper>
      <Title variant='secondary'>IThub</Title>
      <SocialMediaWrapper>
        {SOCIAL_MEDIA_LINKS.map(({ Icon }, index) => (
          <Icon key={index} />
        ))}
      </SocialMediaWrapper>
    </SocialLinksWrapper>
    <RegistrationWrapper>
      <RegistrationDescription>
        © {new Date().getFullYear()}, АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ
        ПРОФЕССИОНАЛЬНОГО ОБРАЗОВАНИЯ &quot;МЕЖДУНАРОДНАЯ АКАДЕМИЯ
        ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ &quot;ИТ ХАБ&quot; вн. тер. г. муниципальный
        округ Таганский, пер. Костомаровский, д. 3, стр. 4, этаж/помещение 3/1,
        ком. 39 Москва, Москва 105120
      </RegistrationDescription>
    </RegistrationWrapper>
  </FooterWrapper>
);
