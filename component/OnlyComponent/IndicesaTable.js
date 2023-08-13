import React from 'react'
import style from '../../src/styles/Table/IndicesTable.module.css'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import IndicesData from '../../data/IndicesData'

const IndicesaTable = ({data}) => {
    return (
        <>
            <div>
                <table className={style.ContentTable}>
                    <thead>
                        <tr>
                            <th className={style.WiderColumn}>Name</th>
                            <th>LTP</th>
                            <th>Chg</th>
                            <th>%Chg</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                const { id, name, Ltp, chg, chgPer } = item
                                return (
                                    <tr key={id}>
                                        <td className={style.WiderColumn}>{name}</td>
                                        <td>{Ltp}</td>
                                        <td className={style.green}>{chg}</td>
                                        <td className={style.green}>{chgPer}<MdOutlineKeyboardArrowUp className={style.iconEdit} /></td>
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

export default IndicesaTable