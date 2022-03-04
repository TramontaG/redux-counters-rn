import {useDispatch, useSelector} from 'react-redux';
import {CountersSelector, CountersState} from '../store';
import actions from '../store/actions';

type Counters = {
    count: CountersState;
    actions: {
        [key in keyof typeof actions]: (id: string) => void;
    };
};

const useCounter = (): Counters => {
    const dispatch = useDispatch();
    const count = useSelector<CountersSelector>(
        state => state.counters,
    ) as CountersState;

    return {
        count,
        actions: {
            deleteCounter: id => dispatch(actions.deleteCounter(id)),
            createCounter: id => dispatch(actions.createCounter(id)),
            decrement: id => dispatch(actions.decrement(id)),
            increment: id => dispatch(actions.increment(id)),
            selectCounter: id => dispatch(actions.selectCounter(id)),
            resetCounter: id => dispatch(actions.resetCounter(id)),
        },
    };
};

export default useCounter;
