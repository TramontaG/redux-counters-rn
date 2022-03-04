import styled from 'styled-components/native';
import {colors} from 'theme';

export const CounterContainer = styled.TouchableOpacity`
    border-color: ${colors.blue[20]};
    border-width: 1px;
    border-radius: 3px;
    margin-bottom: 16px;
    background-color: white;
`;

export const CounterLabel = styled.Text`
    color: #0005;
    font-size: 16px;
    text-align: justify;
    padding: 4px;
    font-weight: bold;
`;

export const CounterValue = styled.Text`
    color: #000b;
    font-size: 40px;
    text-align: right;
    padding: 8px;
    font-weight: bold;
    margin-top: 16px;
`;

export const DataContainer = styled.View<{
    selected: boolean;
}>`
    opacity: ${({selected}) => (selected ? 1 : 0.5)};
    elevation: 10;
`;
