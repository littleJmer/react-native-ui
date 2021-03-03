import React from 'react';
import { TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native';

import utils, { hp, wp } from './utils';
import theme from './theme';

const Button = (props) => {

    const {
        children,
        style,
        //
        color,
        variant,
        disabled,
        loading,
        borderRadius,
        md,
        //
        ...restOfProps
    } = props;

    const _style = [
        styles.base,
        color && utils.evaluateColor(color, 'backgroundColor'),
        variant && styles.variant,
        (disabled || loading) && styles.disabled,
        borderRadius === false && { borderRadius: 0 },
        md && styles.md,
        style // rewrite predefined styles
    ];

    if (disabled || loading) {
        return (
            <View style={_style}>
                {loading ? (<ActivityIndicator color="#fff" />) : <>{children}</>}
            </View>
        )
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={_style}
            {...restOfProps}>{children}</TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    base: {
        backgroundColor: theme.colors.accent,
        borderRadius: 2,
        paddingVertical: hp(1.3),
        paddingHorizontal: 12
    },
    md: {
        paddingVertical: hp(.8),
        paddingHorizontal: wp(2),
    },
    variant: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.accent,
        borderWidth: 2,
    },
    disabled: {
        backgroundColor: theme.colors.gray3
    }
});

export default Button;