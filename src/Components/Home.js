import {Link,Outlet} from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div class="container ">
                <h3>Start Page</h3>
                <div class="row sidenav" >
                    <div class="col-2 m-2 b-1 bg-primary ">
                        <h3>SideNavBar</h3>
                        <br/><br/>
                        <div class="row">
                            <a href="/List" class="text-white">Invoices</a>
                            {/* <Link to="/List" class="text-white">Invoices</Link> */}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;