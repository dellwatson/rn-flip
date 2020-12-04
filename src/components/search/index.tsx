import React from 'react'
import { View, Text } from 'react-native'
import { Input, Position, FilterIcon, Title, } from '../../styles'

export default ({ setQuery, query, setModalVisible }) => (
    <View>
        <Input
            placeholder='Cari nama bank, atau nominal...'
            onChangeText={x => setQuery(x)}
            value={query}
        />
        <FilterIcon onPress={_ => setModalVisible(true)} >
            <Position>
                <Title uppercase bold color='darkorange'>urutkan</Title>
            </Position>
        </FilterIcon>
    </View>
)

