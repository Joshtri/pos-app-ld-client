import React from 'react'
import { Transaksi } from '../../types/transaksi'


interface TransaksiListProps{
    transaksiList : Transaksi[];
}

const TransaksiList : React.FC<TransaksiListProps> = () => {
  return (
    <div className='overflow-x-auto'>
        <table className="table-auto w-full text-left text-gray-600 bg-white shadow-md rounded-lg">
            <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="px-6 py-3">Nama Parfum</th>
                    <th className="px-6 py-3">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TransaksiList