export type CounterAction = {
    type: 'Increment' | 'Decrement' | 'Create' | 'Delete' | 'Select';
    payload: {
        timerId: string;
    };
};

export const increment = (id: string): CounterAction => ({
    type: 'Increment',
    payload: {
        timerId: id,
    },
});

export const decrement = (id: string): CounterAction => ({
    type: 'Decrement',
    payload: {
        timerId: id,
    },
});

export const createCounter = (id?: string): CounterAction => ({
    type: 'Create',
    payload: {
        timerId: id ?? new Date().getTime().toString(),
    },
});

export const deleteCounter = (id: string): CounterAction => ({
    type: 'Delete',
    payload: {
        timerId: id,
    },
});

export const selectCounter = (id: string): CounterAction => ({
    type: 'Select',
    payload: {
        timerId: id,
    },
});
