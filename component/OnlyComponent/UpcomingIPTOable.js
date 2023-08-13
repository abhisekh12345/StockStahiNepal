import React from 'react'
import style from '../../src/styles/Home/UpcomingIPOTable.module.css'
import UpcomingIPOData from '../../data/UpcomingIPOdata'


const UpcomingIPTOable = () => {
    return (
        <>
            <div className={style.tableStart}>
                <table className={style.ContentTable}>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Symbol</th>
                            <th>Company</th>
                            <th>Units</th>
                            <th>Sectors</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            UpcomingIPOData.map((item) => {
                                const { id, fullForm, companyNAme, ratio, units, sectors, remarks } = item
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{fullForm}</td>
                                        <td>{companyNAme}</td>
                                        <td>{units}</td>
                                        <td>{sectors}</td>
                                        <td>{remarks}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UpcomingIPTOable