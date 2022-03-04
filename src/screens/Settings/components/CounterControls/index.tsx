import React from 'react';
import useCounter from 'hooks/useCounter';
import {counterFormat} from 'util/counterFormat';
import {Title, BoldText, BigButton, SmallButton, Container, Row} from './style';

type CounterControlsProps = {};

const CounterControls: React.FC<CounterControlsProps> = props => {
    const {count, actions} = useCounter();

    const currentCounter = count.counters.find(
        counter => counter.id === count.selected,
    );

    const counterValue = counterFormat(currentCounter?.value) ?? '';

    const increment = () => {
        if (!count.selected) return;
        return actions.increment(count.selected);
    };

    const decrement = () => {
        if (!count.selected) return;
        return actions.decrement(count.selected);
    };

    const reset = () => {
        if (!count.selected) return;
        return actions.resetCounter(count.selected);
    };

    return (
        <Container>
            <Title>{counterValue}</Title>
            <Row>
                <SmallButton onPress={decrement}>
                    <BoldText>-</BoldText>
                </SmallButton>
                <SmallButton onPress={increment}>
                    <BoldText>+</BoldText>
                </SmallButton>
                <BigButton onPress={reset}>
                    <BoldText>Reset</BoldText>
                </BigButton>
            </Row>
            <Row></Row>
        </Container>
    );
};

export default CounterControls;
