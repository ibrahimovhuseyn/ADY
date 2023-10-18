import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../../../Config'
import { useDispatch, useSelector } from 'react-redux'
import { getTrajectoryOnAbsheron, setSelectedDirection, setSelectedFrom } from './homeSLice'
import { Button, Label } from 'reactstrap'
import BPS from './BPS'
import BXS from './BXS'
import Select from 'react-select'
import { setIsWeekend } from './outputSlice'
function Absheron() {
    const dispatch = useDispatch()
    const { trajectoryOnAbsheron, selectedDirection, from, selectedFrom } = useSelector(store => store.homeSlice)
    const { isWeekend } = useSelector(store => store.outputSlice)


    useEffect(() => {
        axios.get(`${apiUrl}/trajectoryOnAbsheron`).then(res => dispatch(getTrajectoryOnAbsheron(res.data)))
    }, [])


    const render = () => {
        if (selectedDirection.id === 2) {
            return (
                <BXS />
            )
        }
        else {
            return (
                <BPS />
            )
        }
    }

    return (
        <div className='absheron'>
            <div className="selectDirection">
                <ul>
                    {
                        trajectoryOnAbsheron.map(item => (
                            <li key={item.id}>
                                <Button
                                    onClick={() => {
                                        dispatch(setSelectedDirection(item))
                                    }}
                                >{item.name}
                                </Button>
                            </li>
                        ))
                    }
                </ul>
                <div className='workTime'>
                    <span className='mx-2'>Is Gunleri</span>
                    <label className="switch">
                        <input type="checkbox"
                            onChange={() => {
                                dispatch(setIsWeekend())
                            }}
                        />
                        <span className='slider'></span>
                    </label>
                    <span className='mx-2'>Qeyri-is Gunleri</span>

                </div>
            </div>
            <div className="selection">
                <div className='my-4'>
                    <Label>Istiqamet secin</Label>
                    <Select
                        options={trajectoryOnAbsheron}
                        getOptionLabel={option => option.name}
                        getOptionValue={option => option.id}
                        onChange={e => dispatch(setSelectedDirection(e))}
                    />
                </div>
                <div className='d-flex hey'>
                    {
                        from.map(item => (
                            <Button
                                key={item.id}
                                onClick={() => dispatch(setSelectedFrom(item))}
                            >
                                {item.name}</Button>
                        ))
                    }
                </div>
            </div>
            <div className='from my-4'>
                {
                    from.map(item => (
                        <Button key={item.id}
                            onClick={() => {
                                dispatch(setSelectedFrom(item))
                            }}
                        >
                            {item.name}
                        </Button>
                    ))
                }
            </div>

            {
                render()
            }

        </div>
    )
}

export default Absheron