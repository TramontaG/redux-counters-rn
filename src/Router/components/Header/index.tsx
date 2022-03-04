import React from 'react';
import {HeaderContainer, Title} from './style';

type HeaderProps = {
    title: string;
    bgColor: string;
    textColor: string;
};

const Header: React.FC<HeaderProps> = props => {
    return (
        <HeaderContainer style={{backgroundColor: props.bgColor}}>
            <Title style={{color: props.textColor}}>{props.title}</Title>
        </HeaderContainer>
    );
};

export default Header;
