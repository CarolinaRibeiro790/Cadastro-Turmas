import 'styled-components/native';
import theme from '../theme';

declare module 'styled-components'{
    //tipagem para acessar o theme
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType { }
}