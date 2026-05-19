import React from 'react'
import Pagination from './Pagination'

function Table({ users, page, limit, total, setPage }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 p-6">
            <div className="w-full max-w-5xl rounded-lg shadow-lg bg-gray-800">
                <table className="table-auto w-full border-collapse border border-gray-700 rounded-t-lg">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="p-3 border border-gray-700 text-left">ID</th>
                            <th className="p-3 border border-gray-700 text-left">Name</th>
                            <th className="p-3 border border-gray-700 text-left">Phone</th>
                            <th className="p-3 border border-gray-700 text-left">Email</th>
                            <th className="p-3 border border-gray-700 text-left">Signup Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-700 transition-colors">
                                <td className="p-3 border border-gray-700">{user.id}</td>
                                <td className="p-3 border border-gray-700">{user.fullName}</td>
                                <td className="p-3 border border-gray-700">{user.fullMobileNo}</td>
                                <td className="p-3 border border-gray-700">{user.email}</td>
                                <td className="p-3 border border-gray-700">{user.signupDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination directly under table */}
                <div className="flex justify-center p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
                    <Pagination
                        page={page}
                        limit={limit}
                        total={total}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Table
