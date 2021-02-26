import React from 'react';
import { Text, StyleSheet } from 'react-native';

import utils, { hp } from './utils';

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
        margin,
        padding,
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
        padding && utils.evaluateValue(padding, 'padding'),
        margin && utils.evaluateValue(margin, 'margin'),
        style // rewrite predefined styles
    ];

    return (
        <Text style={_style} {...restOfProps}>{children}</Text>
    )

}

const styles = StyleSheet.create({
    base: {
        // fontSize: 16
        fontSize: hp(2.2)
    },
    md: {
        // fontSize: 14,
        fontSize: hp(1.8)
    },
    bold: {
        fontWeight: '700'
    },
    title: {
        // fontSize: 24,
        fontSize: hp(4),
        fontWeight: '700'
    },
    subtitle: {
        // fontSize: 20,
        fontSize: hp(2.7),
        fontWeight: '700'
    },
    center: {
        textAlign: 'center'
    }
});

export default CustomText;