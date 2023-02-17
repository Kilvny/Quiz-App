import React, { useEffect, useState } from 'react'
import { getServerData } from '../hooks/helpers'

const ResultTable = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/v1/result`, (data) => {
            setData(data)
        })
    },[])

  return (
    <div className='conatiner'>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Total Points</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                {!data ?? <div>No data Found</div>}
                {
                    data.map((v, i) => (
                        <tr key={i} className='table-body'>
                            <td>{v?.username || ''}</td>
                            <td>{v?.result || 0}</td>
                            <td>{v?.score || 0}</td>
                            <td>{v?.passed? 'Passed' : 'Faild'}</td>
                        </tr>

                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable