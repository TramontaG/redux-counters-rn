import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {ScreenComponent} from '../../models/ScreenComponent';
import getCounter from '../../hooks/useCounter';
import CounterDisplay from './components/counterDisplay';
import EmptyListPlaceholder from './components/emptyListPlaceholder';

type CountersProps = ScreenComponent<{}>;

const Counters: React.FC<CountersProps> = props => {
    const {count} = getCounter();

    return (
        <View>
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
        </View>
    );
};

export default Counters;
