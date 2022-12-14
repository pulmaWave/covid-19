import React, { useEffect, useState } from 'react'
import sortTable from '../../utils/func'
import "./style.scss"

const Countries = () => {
  const [countries, setCountries] = useState();

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(data => data.json())
      .then(json => setCountries(json))
  }, [])
  return (
    <div className='countries'>
      <table id="myTable">
        <tbody>
          <tr>
            <th className='countries_country' onClick={() => sortTable(0)}>Country</th>
            <th className='countries_cases' onClick={() => sortTable(1)}>Total cases</th>
            <th className='countries_country' onClick={() => sortTable(2)}>Recovered cases</th>
            <th className='countries_country' onClick={() => sortTable(3)}>Deaths</th>
          </tr>
          {countries
            && countries.Countries
            && countries.Global
            && countries.Countries.map((item) => (
              <tr key={item.ID}>
                <td className='countries_country'>{item.Country}</td>
                <td className=''>{item.TotalConfirmed}</td>
                <td className=''>{item.TotalRecovered}</td>
                <td className=''>{item.TotalDeaths}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div >
  )
}

export default Countries