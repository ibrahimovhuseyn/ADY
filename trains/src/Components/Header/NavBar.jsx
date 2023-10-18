import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link>Tariflər və ödəniş</Link>
        </li>
        <li>
          <Link>Qatarlar</Link>
        </li>
        <li>
          <Link>Stansiyalar</Link>
        </li>
        <li>
          <Link>Daşınma qaydaları</Link>
        </li>
        <li>
          <Link>Əlavə xidmətlər</Link>
        </li>
        <li>
          <Link>Media</Link>
        </li>
        <li>
          <Link>Tez Tez verilən suallar</Link>
        </li>
        <li>
          <Link>Əlaqə</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar