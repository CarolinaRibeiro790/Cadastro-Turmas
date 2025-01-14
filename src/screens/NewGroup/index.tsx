import { Container, Content, Icon } from "./styles";
import { Header } from "../../components/Header";
import { HighLight } from "../../components/Highlight";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function NewGroup(){
const navigation = useNavigation();
const [group, setGroup] = useState('');

    function handleNew(){
        navigation.navigate('players', { group});
    }
    return(
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                <HighLight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />

                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />

                <Button
                    title="Criar"
                    style={{marginTop:20}}
                    onPress={handleNew}
                />
                

            </Content>

        </Container>
    )
}