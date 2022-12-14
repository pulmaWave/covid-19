import React from 'react'

const Country = ({ item }) => {
  return (
    <tr key={item.ID}>
      <td className='countries_country'>{item.Country}</td>
      <td className=''>{item.TotalConfirmed}</td>
      <td className=''>{item.TotalRecovered}</td>
      <td className=''>{item.TotalDeaths}</td>
    </tr>
  )
}

export default Country