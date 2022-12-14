import React, { useEffect, useState } from 'react'
import sortTable from '../../utils/func'
import Country from './Country';
import Spinner from '../../components/spinner/Spinner'
import sortImg from '../../assets/sort.png'
import "./style.scss"
import Popup from '../../components/popup.jsx/Popup';

const Countries = () => {
  const [countries, setCountries] = useState();
  const [countryCode, setCountryCode] = useState()
  const [showPopup, setShowPopup] = useState(false)
  let popup = document.getElementById("popup");
  let close = document.getElementsByClassName("popup_close")[0];

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
      .then(data => data.json())
      .then(json => setCountries(json))
  }, [])

  const handleClick = (item) => {
    setCountryCode(item.CountryCode)
    setShowPopup(!showPopup)
  }

  return (
    <div className='countries'>
      {countries && countries.Message && countries.Message === "Caching in progress" ? (
        <div>
          <h2>Caching in progress</h2>
          <p>We will be right back!</p>
        </div>
      ) :
        <div>
          {!countries && <Spinner />}
          {countries && countries.Countries &&
            <table id="myTable">
              <tbody>
                <tr>
                  <th className='countries_country thead' onClick={() => sortTable(0)}>
                    Country
                    <img src={sortImg} alt="sort" width={20} height={20} />
                  </th>
                  <th className='countries_cases thead' onClick={() => sortTable(1)}>
                    Total cases
                    <img src={sortImg} alt="sort" width={20} height={20} />
                  </th>
                  <th className='countries_recovered' onClick={() => sortTable(2)}>
                    Recovered cases
                    <img src={sortImg} alt="sort" width={20} height={20} />
                  </th>
                  <th className='countries_deaths' onClick={() => sortTable(3)}>
                    Deaths
                    <img src={sortImg} alt="sort" width={20} height={20} />
                  </th>
                </tr>
                {countries.Countries.map((item) => (
                  <Country key={item.ID} item={item} handleClick={() => handleClick(item)} />
                ))}
              </tbody>
            </table>}
        </div>
      }
      {showPopup && <Popup countryCode={countryCode} hanldePopup={() => setShowPopup(false)} />}
    </div >
  )
}

export default Countries