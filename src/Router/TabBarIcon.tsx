import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
  name: string;
};

const TabBarIcon: React.FC<TabBarIconProps> = props => {
  return <Icon name={props.name} size={props.size} color={props.color} />;
};

export default TabBarIcon;
