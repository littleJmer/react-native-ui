import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import spinnerGif from './assets/images/spinner.gif';

export default ({ show, message }) => {
    if (!show) return null;
    return (
        <View style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
        }}>
            <View style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image
                    resizeMode="stretch"
                    source={spinnerGif}
                    style={{
                        width: 200 * 0.6,
                        height: 200 * 0.6,
                    }}
                />
                {message && <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'bold' }}>{message}</Text>}
            </View>
        </View>
    )
}