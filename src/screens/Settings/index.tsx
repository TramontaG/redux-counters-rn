import React from 'react';
import {ScreenComponent} from '../../models/ScreenComponent';
import getCounter from '../../hooks/useCounter';
import {View, Text, TouchableOpacity} from 'react-native';
import {
    ButtonsContainer,
    Button,
    BoldText,
    Title,
    PageContainer,
    ControlsContainer,
} from './style';

type SettingsProps = ScreenComponent<{}>;

const Settings: React.FC<SettingsProps> = props => {
    const {count, actions} = getCounter();

    const removeCounter = () => {
        if (!count.selected) throw 'No counter selected';
        actions.deleteCounter(count.selected);
    };

    const addCounter = () => {
        actions.createCounter();
    };

    return (
        <PageContainer>
            <View>
                <Title>Counters</Title>

                <ButtonsContainer>
                    <Button>
                        <BoldText>Add Counter</BoldText>
                    </Button>
                    <Button>
                        <BoldText>Remove Counter</BoldText>
                    </Button>
                </ButtonsContainer>
            </View>

            <View>
                <Title>Selected Counter</Title>
                <ControlsContainer>
                    <Text>Counter Controls</Text>
                </ControlsContainer>
            </View>
        </PageContainer>
    );
};

export default Settings;
