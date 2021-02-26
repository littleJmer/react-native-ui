import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { hp } from './utils';

export default ({ onPress }) => {
    return (
        <TouchableOpacity
            style={{ alignSelf: 'flex-start' }}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Icon
                name='chevron-left'
                size={hp(5)}
                color="#000"
                style={{ marginLeft: -11, marginTop: 0 }}
            />
        </TouchableOpacity>
    )
}