import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { COLORS, SHADOWS, SIZES, FONTS } from '../../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            borderRadius: SIZES.extraLarge,
            backgroundColor: COLORS.white,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props,
        }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode='contain'
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    )
}

export const RectButton = () => {
    return (
        <View>
            <Text>Button</Text>
        </View>
    )
}
