import React, { useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Modal from '../components/modal'
import Search from '../components/search'
import { sortir, filterObj } from '../utils'
import Wallet from '../components/Wallet'


export default (props: any) => {
    // use hooks for simply fetch data
    const { data, isLoading } = useFetch('/frontend-test')
    const [query, setQuery] = useState('')

    const [modalVisible, setModalVisible] = useState(false);
    const [filter, setFilter] = useState({
        value: '',
        lastPosition: null,
    })

    // format data to array for easier
    const formattedData = Object.keys(data).map(k => data[k])

    // this will search the entire property value on object
    // since i the objective is not clearly about the search input
    // like, what kind of name ? every name ? 
    // so i just search whatever matches with property value, 
    // better more than less :3
    const searchInput = filterObj(formattedData, query)
    // const searchInput = filterObjLimited(formattedData, query)

    // check has filter input from modal
    const result = !!filter.value ?
        sortir(filter.value.split('#')[0], searchInput) : searchInput

    // check if it's reversed or not
    const finalResult = !!filter.value.split('#')[1] ? result.reverse() : result

    return (
        <>
            <Modal {...{ modalVisible, setModalVisible, setFilter, filter }} />
            <Search {...{ setQuery, query, setModalVisible }} />
            <Wallet data={finalResult} />
        </>
    )
}

