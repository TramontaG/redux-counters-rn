import React from 'react';
import {ScreenComponent} from 'models/ScreenComponent';
import getCounter from 'hooks/useCounter';
import {View} from 'react-native';
import {
    ButtonsContainer,
    Button,
    BoldText,
    Title,
    PageContainer,
    ControlsContainer,
} from './style';
import CounterControls from './components/CounterControls';

type SettingsProps = ScreenComponent<{}>;

const Settings: React.FC<SettingsProps> = props => {
    const {count, actions} = getCounter();

    const removeCounter = () => {
        if (!count.selected) return;
        actions.deleteCounter(count.selected);
    };

    const addCounter = () => {
        actions.createCounter(new Date().getTime().toString());
    };

    const label = (() => {
        if (count.selected) return `Selected counter: #${count.selected}`;
        return 'No counter selected';
    })();

    return (
        <PageContainer>
            <View>
                <Title>Counters</Title>

                <ButtonsContainer>
                    <Button onPress={addCounter}>
                        <BoldText>Add Counter</BoldText>
                    </Button>

                    <Button onPress={removeCounter}>
                        <BoldText>Remove Counter</BoldText>
                    </Button>
                </ButtonsContainer>
            </View>

            <View>
                <Title>{label}</Title>
                <ControlsContainer>
                    <CounterControls />
                </ControlsContainer>
            </View>
        </PageContainer>
    );
};

export default Settings;
