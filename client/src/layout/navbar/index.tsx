import {
  NavbarWrapper,
  NavigationWrapper,
  LinkComponent as Link,
  MenuBurger,
} from './styles';
import { Button, Title } from 'ui';
import { NAVIGATION_LINKS } from 'data';

export const Navbar = () => (
  <NavbarWrapper>
    <Title>IThub</Title>
    <NavigationWrapper>
      {NAVIGATION_LINKS.map(({ label, linkTo }, index) => (
        <Link key={index} to={linkTo}>
          {label}
        </Link>
      ))}
      <Button>Поступить</Button>
    </NavigationWrapper>
    <MenuBurger />
  </NavbarWrapper>
);
