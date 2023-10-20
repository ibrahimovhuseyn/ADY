import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { apiUrl } from '../../../Config';
import { getOutputInWeekList, getOutputInWeekendList, getOutputsInWeekFromSumgait, getOutputsInWeekendFromSumgait, getStationList, setIsWeekend } from './outputSlice';
import { Table } from 'reactstrap'

function BPS() {
    const { outputsInWeek,
        outputsInWeekend,
        stations,
        isWeekend,
        outputsInWeekFromSumgait,
        outputsInWeekendFromSumgait
    } = useSelector(store => store.outputSlice)
    const { selectedDirection, selectedFrom } = useSelector(store => store.homeSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        getList()
    }, [])


    const selectedFromId = selectedFrom.id


    const getList = () => {
        axios.get(`${apiUrl}/outputsInWeek?trajectoryId=${selectedDirection.id}`).then(res => dispatch(getOutputInWeekList(res.data)))
        axios.get(`${apiUrl}/outputsInWeekEnd?trajectoryId=${selectedDirection.id}`).then(res => dispatch(getOutputInWeekendList(res.data)))
        axios.get(`${apiUrl}/outputsInWeekFromSumgait?trajectoryId=${selectedDirection.id}`).then(res => dispatch(getOutputsInWeekFromSumgait(res.data)))
        axios.get(`${apiUrl}/outputsInWeekendFromSumgait?trajectoryId=${selectedDirection.id}`).then(res => dispatch(getOutputsInWeekendFromSumgait(res.data)))
        axios.get(`${apiUrl}/stationsOnBPS`).then(res => dispatch(getStationList(res.data)))
    }

    const renderOutputs = () => {
        if (selectedFromId === 1) {
            return (
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
            )
        }
        else if (selectedFromId === 2) {
            return (
                <tbody>
                    {
                        !isWeekend ?
                            outputsInWeekFromSumgait.map(item => (
                                <tr>
                                    <td>{item.trainNum}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))
                            :
                            outputsInWeekendFromSumgait.map(item => (
                                <tr>
                                    <td>{item.trainNum}</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))
                    }
                </tbody>
            )
        }
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

                {
                    renderOutputs()
                }

            </Table>
        </div>
    )
}

export default BPS