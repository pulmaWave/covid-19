import React, { useEffect, useState } from 'react'
import Spinner from '../spinner/Spinner'
import './Popup.scss'

const Popup = ({ countryCode, hanldePopup }) => {
  const [data, setData] = useState()
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then(data => data.json())
      .then(json => setData(json))
  }, [countryCode])
  return (
    <div className='popup'>
      {!data &&
        <div className='popup_spinner'>
          <Spinner />
        </div>
      }
      <div className='popup_overlay' onClick={hanldePopup}></div>
      {
        data &&
        <div className="popup_content">
          <table className='popup_countryTable'>
            <tbody>
              <tr>
                <th className='popup_name'>Name</th>
                <th className='popup_flag'>Flag</th>
                <th className='popup_population'>Population</th>
                <th className='popup_capital'>Capital</th>
                <th className='popup_region'>Region</th>
                <th className='popup_subRegion'>Subregion</th>
              </tr>
              {
                data.length > 0 &&
                <tr>
                  <td>{data[0].name.common}</td>
                  <td><img src={data[0].flags.png} alt={data[0].name.common} width={24} height={24} /></td>
                  <td>{data[0].population}</td>
                  <td>{data[0].capital}</td>
                  <td>{data[0].region}</td>
                  <td>{data[0].subregion}</td>
                </tr>}
            </tbody>
          </table>
        </div>
      }
    </div >
  )
}

export default Popup