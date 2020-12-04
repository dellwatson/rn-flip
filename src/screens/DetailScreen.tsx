import React from 'react'
import { View, Clipboard, TouchableOpacity, } from 'react-native'
import { Title, Row, List } from '../styles'
import { formatPrice, formatDate, } from '../utils'


const ButtonText = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <Title
            transform='capitalize'
            color='darkorange' style={{ marginLeft: 10 }}>
            {title}
        </Title>
    </TouchableOpacity>
)

const Group = ({ title, subtitle }) => (
    <View style={{ flex: 1, marginTop: 20 }}>
        <Title uppercase bold>{title}</Title>
        <Title>{subtitle}</Title>
    </View>
)

export default ({ route: { params }, navigation }) => (

    <View style={{ flex: 1, backgroundColor: '#eee' }}>
        <List justify='flex-start'>
            <Row style={{ flexWrap: 'wrap' }}>
                <Title bold uppercase>id transaksi:#{params?.id ?? '-'}</Title>
                <ButtonText
                    onPress={_ => Clipboard.setString(params?.id)}
                    title='Copy' />
            </Row>
        </List>
        <List justify='space-between'>
            <Title bold uppercase>detail transaksi</Title>
            <ButtonText
                onPress={_ => navigation.goBack()}
                title='tutup' />
        </List>
        <List column justify='flex-start' align='flex-start'>
            <Title size={26} bold uppercase>
                {params?.sender_bank} -> {params.beneficiary_bank}
            </Title>
            <Row>
                <Group
                    title={params?.beneficiary_name}
                    subtitle={params?.account_number}
                />
                <Group
                    title={`Nominal`}
                    subtitle={`Rp${formatPrice(params?.amount)}`}
                />
            </Row>
            <Row>
                <Group
                    title={`berita transfer`}
                    subtitle={params?.remark}
                />
                <Group
                    title={`kode unik`}
                    subtitle={params?.unique_code}
                />
            </Row>
            <Row>
                <Group
                    title={`waktu dibuat`}
                    subtitle={`${formatDate(params?.created_at)}`}
                />
                <View />
            </Row>
        </List>
    </View>
)






