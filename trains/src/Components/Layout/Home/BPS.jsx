import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { apiUrl } from '../../../Config';
import { getOutputInWeekList, getOutputInWeekendList, getStationList, setIsWeekend } from './outputSlice';
import { Table } from 'reactstrap'

function BPS() {
    const { outputsInWeek, outputsInWeekend, stations, isWeekend } = useSelector(store => store.outputSlice)
    const { selectedDirection } = useSelector(store => store.homeSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        getList()
    }, [])


    const getList = () => {
        axios.get(`${apiUrl}/outputsInWeek?trajectoryId=${selectedDirection.id}`).then(res => dispatch(getOutputInWeekList(res.data)))
        axios.get(`${apiUrl}/outputsInWeekEnd?trajectoryId=${selectedDirection.id}`).then(res => dispatch(getOutputInWeekendList(res.data)))
        axios.get(`${apiUrl}/stationsOnBPS`).then(res => dispatch(getStationList(res.data)))
    }
    return (
        <div className='bps'>
            <Table>
                <thead>
                    <td>Qatarın nömrəsi</td>
                    {
                        stations.map(item => (
                            <th key={item.id}>{item.name}</th>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        !isWeekend ?
                            outputsInWeek.map(item => (
                                <tr>
                                    <td>{item.trainNum}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))
                            :
                            outputsInWeekend.map(item => (
                                <tr>
                                    <td>{item.trainNum}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default BPS