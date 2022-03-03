import {configureStore} from '@reduxjs/toolkit';
import {CounterAction} from './actions';
import {
    selectCounter,
    createCounter,
    incrementCounter,
    decrementCounter,
    removeCounter,
} from './Slice';

export type CounterState = {
    id: string;
    value: number;
};

export type CountersSelector = {
    counters: CountersState;
};

export type CountersState = {
    counters: CounterState[];
    selected: string | undefined;
};

export const appState: CountersState = {
    counters: [],
    selected: undefined,
};

export const counterReducer = (state = appState, action: CounterAction) => {
    if (action.type === 'Decrement')
        return decrementCounter(state, action.payload.timerId);
    if (action.type === 'Increment')
        return incrementCounter(state, action.payload.timerId);
    if (action.type === 'Create')
        return createCounter(state, action.payload.timerId);
    if (action.type === 'Delete')
        return removeCounter(state, action.payload.timerId);
    if (action.type === 'Select')
        return selectCounter(state, action.payload.timerId);
    return appState;
};

export default configureStore<any, CounterAction>({
    reducer: {
        counters: counterReducer,
    },
});
