import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'

import { NFTData, COLORS } from "../../constants"
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <FocusedStatusBar backgroundColor={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={NFTData}
                        renderItem={({ item }) => {
                            return <NFTCard data={item}></NFTCard>
                        }}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader />}
                    />
                </View>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.gray }} />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({})