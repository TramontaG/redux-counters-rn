import styled from 'styled-components/native';
import {colors} from './../../Theme';

export const PageContainer = styled.View`
    background-color: ${colors.blue[100]};
    padding: 16px;
    justify-content: space-between;
    flex: 1;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    width: 35%;
    padding: 16px;
    background: #ddd;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    elevation: 10;
    border-color: ${colors.blue[20]};
    border-width: 1px;
    border-style: solid;
`;

export const BoldText = styled.Text`
    font-weight: bold;
    color: ${colors.blue[60]};
    font-size: 18px;
    text-align: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    color: ${colors.blue[40]};
    font-size: 22px;
    text-align: justify;
    margin-top: 16px;
    margin-bottom: 16px;
`;

export const ControlsContainer = styled.View`
    width: 100%;
    border-style: dashed;
    border-color: white;
    border-width: 1px;
    padding: 16px;
    min-height: 30%;
    border-radius: 5px;
`;
