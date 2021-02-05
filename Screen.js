import React from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Platform,
    StatusBar,
    StyleSheet
} from 'react-native';

const Screen = (props) => {

    const {
        children,
        style,
        //
        scroll,
        //
        ...restOfProps
    } = props;

    const _style = [
        styles.base,
        style
    ];

    // if (scroll) {
    //     return (
    //         <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
    //             <SafeAreaView style={_style} {...restOfProps}>
    //                 <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
    //                     {children}
    //                 </ScrollView>
    //             </SafeAreaView>
    //         </TouchableWithoutFeedback>
    //     )
    // }

    // return (
    //     <SafeAreaView style={_style} {...restOfProps}>
    //         <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
    //             {children}
    //         </TouchableWithoutFeedback>
    //     </SafeAreaView>
    // )

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={StatusBar.currentHeight}
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        >
            <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
                <SafeAreaView style={_style} {...restOfProps}>
                    {children}
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    base: {
        flex: 1
    }
});

export default Screen;