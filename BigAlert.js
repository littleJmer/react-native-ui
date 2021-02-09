import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Button from './Button'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({
    show,
    onClick,
    title,
    message,
    type = 'success',
    okText = 'Continuar',
    cancelText = 'Cancelar',
    onCancel,
}) => {
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
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    padding: 24,
                    borderRadius: 12
                }}>

                    <View style={{ display: 'flex', alignItems: 'center', paddingTop: 50 }}>
                        {type === 'success' && (<Icon name="checkbox-marked-circle-outline" size={80} color="#008000" />)}
                        {type === 'info' && (<Icon name="help-circle" size={80} color="#4f4f4f" />)}
                    </View>

                    <View style={{ display: 'flex', alignItems: 'center', padding: 24 }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
                        <Text style={{ fontSize: 16, color: '#808080', textAlign: 'center' }}>{message}</Text>
                    </View>

                    <View style={[typeof onCancel === 'function' && styles.row]}>
                        {typeof onCancel === 'function' && (
                            <Button
                                color="tomato"
                                style={styles.button}
                                onPress={onCancel}
                            >
                                <Text style={{ color: '#fff' }}>{cancelText}</Text>
                            </Button>
                        )}
                        <Button
                            color="primary"
                            style={styles.button}
                            onPress={() => { if (typeof onClick === 'function') onClick(); }}
                        >
                            <Text style={{ color: '#fff' }}>{okText}</Text>
                        </Button>
                    </View>

                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        alignSelf: 'center',
        borderRadius: 15,
        paddingVertical: 9,
        paddingHorizontal: 25,
    }
});