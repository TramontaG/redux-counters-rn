import {createSlice} from '@reduxjs/toolkit';
import {CounterState, CountersState, appState, counterReducer} from '.';

const getNewCounter = (id: string): CounterState => ({
    id: id,
    value: 0,
});

export const incrementCounter = (
    state: CountersState,
    id: string,
): CountersState => {
    const incrementedCounterArr = state.counters.map(counter => {
        if (counter.id === id) return {...counter, value: counter.value + 1};
        return counter;
    });
    return {...state, counters: incrementedCounterArr};
};

export const decrementCounter = (
    state: CountersState,
    id: string,
): CountersState => {
    const decrementedCounterArray = state.counters.map(counter => {
        if (counter.id === id) return {...counter, value: counter.value - 1};
        return counter;
    });
    return {...state, counters: decrementedCounterArray};
};

export const resetCounter = (
    state: CountersState,
    id: string,
): CountersState => {
    const decrementedCounterArray = state.counters.map(counter => {
        if (counter.id === id) return {...counter, value: 0};
        return counter;
    });
    return {...state, counters: decrementedCounterArray};
};

export const createCounter = (
    state: CountersState,
    id: string,
): CountersState => {
    return {
        ...state,
        counters: [...state.counters, getNewCounter(id)],
    };
};

export const removeCounter = (
    state: CountersState,
    id: string,
): CountersState => {
    const filteredCounters = state.counters.filter(
        counter => counter.id !== id,
    );
    return {...state, counters: filteredCounters, selected: undefined};
};

export const selectCounter = (
    state: CountersState,
    id: string,
): CountersState => {
    return {...state, selected: id};
};

export const counterSlice = createSlice<CountersState, any, any>({
    name: 'counter',
    initialState: appState,
    reducers: {
        counters: counterReducer,
    },
});
