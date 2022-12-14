import React from 'react'

const Country = ({ item, handleClick }) => {
  return (
    <tr className='country' onClick={handleClick}>
      <td>{item.Country}</td>
      <td>{item.TotalConfirmed}</td>
      <td>{item.TotalRecovered}</td>
      <td>{item.TotalDeaths}</td>
    </tr>
  )
}

export default Country