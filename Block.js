import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import utils from './utils';

const Block = (props) => {

    const {
        children,
        style,
        // -
        flex,
        row,
        center,
        end,
        middle,
        spaceBetween,
        scroll,
        color,
        padding,
        margin,
        // -
        ...restOfProps
    } = props;

    const css = [
        styles.base,
        flex && styles.flex,
        row && styles.row,
        center && styles.center,
        end && styles.end,
        middle && styles.middle,
        spaceBetween && styles.spaceBetween,
        color && utils.evaluateColor(color, 'backgroundColor'),
        padding && utils.evaluateValue(padding, 'padding'),
        margin && utils.evaluateValue(margin, 'margin'),
        style && { ...style }
    ];

    if (scroll) {
        let horizontal = scroll === 'horizontal';
        return (
            <ScrollView
                horizontal={horizontal}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                {...restOfProps}
            >
                <View style={css}>{children}</View>
            </ScrollView>
        )
    }

    return (
        <View style={css} {...restOfProps}>{children}</View>
    )

}

const styles = StyleSheet.create({
    base: {
        display: 'flex',
        flexDirection: 'column'
    },
    flex: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
    },
    // horizontal align (flex-direction: row)
    middle: {
        alignItems: 'center'
    },
    // vertical align (flex-direction: column)
    center: {
        justifyContent: 'center'
    },
    end: {
        justifyContent: 'flex-end'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    }
});

export default Block;