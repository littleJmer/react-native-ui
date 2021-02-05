import React from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

export default (props) => {

    if (props.label) {
        return (
            <View style={{ ...styles.withLabel, ...props.style }}>
                <View style={{ ...styles.divider, flex: 1 }}></View>
                <Text style={styles.label}>{props.label}</Text>
                <View style={{ ...styles.divider, flex: 1 }}></View>
            </View>
        )
    }

    return (
        <View style={{ ...styles.divider, ...props.style }}></View>
    );
}

const styles = StyleSheet.create({
    withLabel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: '#9FB3D2',
        marginHorizontal: 5
    },
    divider: {
        backgroundColor: '#9FB3D2',
        height: 1,
    }
});