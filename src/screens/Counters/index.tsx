import React from 'react';
import {FlatList} from 'react-native';
import {ScreenComponent} from '../../models/ScreenComponent';
import getCounter from '../../hooks/useCounter';
import CounterDisplay from './components/counterDisplay';
import EmptyListPlaceholder from './components/emptyListPlaceholder';
import {PageContainer} from './style';

type CountersProps = ScreenComponent<{}>;

const Counters: React.FC<CountersProps> = props => {
    const {count} = getCounter();

    return (
        <PageContainer>
            <FlatList
                data={count.counters}
                renderItem={({item}) => (
                    <CounterDisplay
                        counter={item}
                        activeCounter={count.selected}
                    />
                )}
                ListEmptyComponent={EmptyListPlaceholder}
            />
        </PageContainer>
    );
};

export default Counters;
