import React from 'react'
import cust from './customer'
import styles from './viewcustomer.module.css'



export default function Viewcustomers() {
    return (
        <div >
            <div className={styles.customerhead}>
                <p className={styles.all}>ALL customers</p>
                <table className={styles.customertable}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone no</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cust.map((customer, index) =>
                            <tr key={index}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phnNO}</td>
                                <td>{customer.address}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
