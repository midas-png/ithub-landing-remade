import 'styled-components';

interface IPalette {
  main: string;
  border: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;
    paddingSize: {
      small: string;
      medium: string;
      large: string;
    };
    palette: {
      common: {
        main: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
      };
      primary: IPalette;
      secondary: IPalette;
      tertiary: IPalette;
      quaternary: IPalette;
    };
  }
}
