import React from 'react';
import getCounter from 'hooks/useCounter';
import {CounterState} from 'store';
import {counterFormat} from 'util/counterFormat';

import {
    CounterContainer,
    CounterLabel,
    CounterValue,
    DataContainer,
} from './style';

type CounterDisplayProps = {
    counter: CounterState;
    activeCounter?: string;
};

const CounterDisplay: React.FC<CounterDisplayProps> = props => {
    const {count, actions} = getCounter();
    const selected = count.selected === props.counter.id;
    const counterLabel = `Counter #${props.counter.id}`;
    const counterValue = counterFormat(props.counter.value);

    const selectCounter = () => actions.selectCounter(props.counter.id);

    return (
        <DataContainer selected={selected}>
            <CounterContainer onPress={selectCounter}>
                <CounterLabel>{counterLabel}</CounterLabel>
                <CounterValue>{counterValue}</CounterValue>
            </CounterContainer>
        </DataContainer>
    );
};

export default CounterDisplay;
