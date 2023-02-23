import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'

import { NFTData, COLORS } from "../../constants"
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => {
                            return <Text style={{ color: "black" }}>{item.name}</Text>
                        }}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>

            </View>
        </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({})