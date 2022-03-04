import styled from 'styled-components/native';
import {colors} from '../../../../Theme';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SmallButton = styled.TouchableOpacity`
    flex: 1;
    padding: 8px 16px;
    background: #ddd;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    elevation: 10;
    border: solid ${colors.blue[20]} 1px;
    margin: 8px;
`;

export const BigButton = styled.TouchableOpacity`
    padding: 8px 16px;
    background: #ddd;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    elevation: 10;
    border: solid ${colors.blue[20]} 1px;
    margin: 8px;
    flex: 4;
`;

export const BoldText = styled.Text`
    font-weight: bold;
    color: ${colors.blue[60]};
    font-size: 20px;
    text-align: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    color: ${colors.blue[40]};
    font-size: 16px;
    text-align: justify;
`;

export const Row = styled.View`
    margin-top: 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-around;
`;
