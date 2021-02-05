import React from 'react';
import { Text, StyleSheet } from 'react-native';

import utils from './utils';

const CustomText = (props) => {

    const {
        children,
        style,
        //
        color,
        center,
        title,
        subtitle,
        md,
        bold,
        //
        ...restOfProps
    } = props;

    const _style = [
        styles.base,
        color && utils.evaluateColor(color, 'color'),
        center && styles.center,
        title && styles.title,
        subtitle && styles.subtitle,
        md && styles.md,
        bold && styles.bold,
        style // rewrite predefined styles
    ];

    return (
        <Text style={_style} {...restOfProps}>{children}</Text>
    )

}

const styles = StyleSheet.create({
    base: {
        fontSize: 16
    },
    md: {
        fontSize: 14,
    },
    bold: {
        fontWeight: '700'
    },
    title: {
        fontSize: 24,
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '700'
    },
    center: {
        textAlign: 'center'
    }
});

export default CustomText;