import React, { useEffect, useState } from 'react'
import sortTable from '../../utils/func'
import Country from './country';
import Spinner from '../../components/spinner/spinner'
import "./style.scss"

const Countries = () => {
  const [countries, setCountries] = useState();
  console.log(countries)

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(data => data.json())
      .then(json => setCountries(json))
  }, [])
  return (
    <div className='countries'>
      {countries && countries.Message && countries.Message === "Caching in progress" ? (
        <div>
          <h2>Caching in progress</h2>
          <p>We will right back!</p>
        </div>
      ) :
        <div>
          {!countries && <Spinner />}
          {countries && countries.Countries &&
            <table id="myTable">
              <tbody>
                <tr>
                  <th className='countries_country' onClick={() => sortTable(0)}>Country</th>
                  <th className='countries_cases' onClick={() => sortTable(1)}>Total cases</th>
                  <th className='countries_country' onClick={() => sortTable(2)}>Recovered cases</th>
                  <th className='countries_country' onClick={() => sortTable(3)}>Deaths</th>
                </tr>
                {countries.Countries.map((item) => (
                  <Country item={item} />
                ))}
              </tbody>
            </table>}
        </div>
      }
    </div >
  )
}

export default Countries