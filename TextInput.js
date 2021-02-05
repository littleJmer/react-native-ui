import React from 'react';

import { View, TextInput, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CustomTextInput extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {
            icon,
            style,
            ...restOfProps
        } = this.props;

        const css = [
            styles.wrapper,
            style && { ...style }
        ];

        return (
            <View style={css}>
                {icon && this.renderIcon(icon)}
                <TextInput style={styles.input} {...restOfProps} />
            </View>
        )
    }

    renderIcon(icon) {
        return (
            <View style={{ marginRight: 5 }}>
                <Icon name={icon} size={20} color="#9FB3D2" />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    wrapper: {
        borderBottomColor: '#9FB3D2',
        borderBottomWidth: 1,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 40,
        padding: 0,
        flex: 1,
    }
});

export default CustomTextInput;