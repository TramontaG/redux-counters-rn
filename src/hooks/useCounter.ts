import {useDispatch, useSelector} from 'react-redux';
import {CountersSelector, CountersState, CounterState} from '../store';
import * as actions from './../store/actions';

const getCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector<CountersSelector>(
        state => state.counters,
    ) as CountersState;

    return {
        count,
        actions: {...actions},
    };
};

export default getCounter;
