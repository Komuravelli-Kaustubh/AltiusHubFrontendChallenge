export default function InvoiceDetailCreate(){
    return(
        <div class="p-3 m-3">
            <form>
                <label>Enter Id: </label><input type="number" placeholder="Enter Id" required/><br/>
                <label>Enter Date: </label><input type="date" placeholder="Enter Date" required/><br/>
                <label>Enter Invoice Number: </label><input type="number" placeholder="Enter Invoice Number"/><br/>
                <label>Enter Customer Name: </label><input type="text" /><br/>
                <label>Enter Billing Address: </label><input type="text" /><br/>
                <label>Enter Shipping Address: </label><input type="text" /><br/>
                <label>Enter GSTIN  : </label><input type="text" /><br/>
                <label>Enter Customer Name: </label><input type="text" /><br/>
                <label>TotalAmount: </label><input type="text" /><br/>


                <a class="btn btn-primary" type="submit">Create Invoice</a>
                


            </form>
        </div>
    )
}