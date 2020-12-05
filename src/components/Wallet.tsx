import React, { useRef, useState } from "react";
import { Animated, FlatList, RefreshControl } from "react-native";
import WalletCard from "./WalletCard";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

// for expensive computation
const useLazyRef = <T extends object>(initializer: () => T) => {
    const ref = useRef<T>();
    if (ref.current === undefined) {
        ref.current = initializer();
    }
    return ref.current;
};


export default ({ data, isLoading, refresh }: any) => {
    const y = useLazyRef(() => new Animated.Value(0));
    const onScroll = useLazyRef(() =>
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: { y },
                    },
                },
            ],
            { useNativeDriver: true }
        )
    );

    return (
        <AnimatedFlatList
            // bounces={false}
            style={{ paddingHorizontal: '5%' }}
            contentContainerStyle={{ paddingBottom: 400, }}
            scrollEventThrottle={16}
            keyExtractor={(item) => `${item.id}`}
            {...{ onScroll, data }}
            renderItem={({ index, item }) => (
                <WalletCard {...{ index, y, item }} />
            )}
            refreshControl={
                <RefreshControl
                    refreshing={isLoading}
                    onRefresh={refresh} />
            }
        />
    );
};
