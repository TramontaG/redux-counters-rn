import React from 'react';
import {View, Text} from 'react-native';
import {CounterState} from '../../../../store';

type CounterDisplayProps = {
    counter: CounterState;
    activeCounter?: string;
};

const CounterDisplay: React.FC<CounterDisplayProps> = props => {
    return (
        <View>
            <Text>Counter #{props.counter.id}</Text>
            <Text>{props.counter.value}</Text>
            <Text>active: {props.activeCounter === props.counter.id}</Text>
        </View>
    );
};

export default CounterDisplay;
