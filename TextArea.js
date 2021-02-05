import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import utils from './utils';

export default (props) => {

    const {
        style,
        //
        //..
        //
        ...restOfProps
    } = props;

    const _style = [
        styles.base,
        style // rewrite predefined styles
    ];

    return <TextInput
        style={_style}
        multiline={true}
        textAlignVertical='top'
        numberOfLines={4}
        {...restOfProps}
    />

}

const styles = StyleSheet.create({
    base: {
        borderColor: '#9FB3D2',
        borderWidth: 1,
    }
});