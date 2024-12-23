import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

//criação de um tipo baseado no tipo do botão e junatndo com uma tipagem
type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Icon />
            <Title>{title}</Title>
        </Container>
    )
}