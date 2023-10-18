import React, { useEffect } from 'react'
import { Button, Label } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import axios from 'axios'
import { apiUrl } from '../../Config'
import { getRelsType, setSelectedRelsType } from '../Layout/Home/homeSLice'
import Absheron from '../Layout/Home/Absheron'
import International from '../Layout/Home/International'
import InCountry from '../Layout/Home/InCountry'

function Home() {
  const { relsType, selectedRelsType } = useSelector(store => store.homeSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get(`${apiUrl}/relstypes`).then(res => dispatch(getRelsType(res.data)))
  }, [])




  function render() {
    if (selectedRelsType.id === 3) {
      return (
        <InCountry />
      )
    }
    else if (selectedRelsType.id === 2) {
      return (
        <International />
      )
    }
    else {
      return (
        <Absheron />
      )
    }
  }


  return (
    <div className='home container'>
      <h1>Hərəkət Cədvəli</h1>
      <div className="select">
        <Label htmlFor='select'>Filter</Label>
        <Select
          id='select'
          options={relsType}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          onChange={e => dispatch(setSelectedRelsType(e))}
        />
      </div>
      <div className='relsType'>
        <ul>
          {
            relsType.map(item => (
              <li key={item.id}>
                <Button
                  onClick={() => {

                    dispatch(setSelectedRelsType(item))
                  }}
                >{item.name}
                </Button>
              </li>
            ))
          }
        </ul>
      </div>
      {
        render()
      }
    </div>
  )
}

export default Home