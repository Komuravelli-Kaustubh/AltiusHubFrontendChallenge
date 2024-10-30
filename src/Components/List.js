import React from "react";

const List = () => {
    return (
        <div class="p-2">
            <h3> List of Invoices</h3>


            <hr />
            {/* <div class="align-items-center justify-content-center"> */}
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a class="btn btn-primary" href="InvoiceDetailCreate">Add</a>
                        <br />


                        <table>
                            <thead>
                                <tr>
                                    <th>Invoice ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12345</td>
                                    <td>01/01/2020</td>
                                    <td>$1,000.00</td>
                                    <td>Paid</td>
                                    {/* <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td> */}
                                </tr>
                                <tr>
                                    <td>67890</td>
                                    <td>02/02/2020</td>
                                    <td>$2,000.00</td>
                                    <td>Unpaid</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div></div>
                <br/>
                <br/>

            {/* Paginator logic */}

            <div class="text-center fixed-bottom">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>

                </ul>
            </div>







        </div>
    )
}

export default List;