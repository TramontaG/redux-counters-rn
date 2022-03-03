import React from 'react';
import {View, Text} from 'react-native';

type EmptyListPlaceholderProps = {};

const EmptyListPlaceholder: React.FC<EmptyListPlaceholderProps> = props => {
    return (
        <View>
            <Text>
                Oops, no counters here. Add a new counter in the settings tab
            </Text>
        </View>
    );
};

export default EmptyListPlaceholder;
