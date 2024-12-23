import { Container, Logo, BackButton, BackIcon } from './styles';

import logoImg from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
const navigation = useNavigation();

    function handleGoBack(){
        //navigation.goBack(); página anterior
        navigation.navigate('groups');//voltar para página inicial 
        //navigation.popToTop();voltar para página inicial 

    }
    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}