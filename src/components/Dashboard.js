import React,{useContext} from 'react'
import BasicCard from './CardComponents/BasicCard'
import ProgressCard from './CardComponents/ProgressCard'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import {UserContext} from './ContextComponent/UserContextComponent'
import {DashboardContext} from './ContextComponent/DashboardContextComponent'
function Dashboard() { 
    let context = useContext(UserContext)
    let dash = useContext(DashboardContext)
    let navigate = useNavigate()
    let handleDelete = (i)=>{
        let newArray = [...context.users]
        newArray.splice(i,1)
        context.setUsers(newArray)
    }
  return <>
           {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar) --> */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

                    {/* <!-- Topbar Search --> */}
                    <form
                        className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </nav>
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    {/* <!-- Content Row --> */}
                    <div className="row">
                        <BasicCard lable="Earnings (Monthly)" value={dash.earningsMonthly} icon="fa-calendar" border="primary"/>
                        <BasicCard lable="Earnings (Annual)" value={dash.earningsYearly} icon="fa-dollar-sign" border="success"/>
                        <ProgressCard lable="Tasks" value={dash.task} icon="fa-clipboard-list"  border="info"/>
                        <BasicCard lable="Pending Requests" value={dash.pandingRequest} icon="fa-comments" border="warning"/>
                    </div>

                    <Table striped bordered hover>
                   <thead>
                     <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Mobile</th>
                       <th>Batch</th>
                       <th>Timings</th>
                       <th>Actions</th>
                     </tr>
                   </thead>
                   <tbody>
                      {
                        context.users.map((e,i)=>{
                           return <tr key={i}>
                           <td>{i+1}</td>
                           <td>{e.name}</td>
                           <td>{e.email}</td>
                           <td>{e.mobile}</td>
                           <td>{e.batch}</td>
                           <td>{e.timings}</td>
                           <td>
                               <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}>
                                <i className="fas fa-pen-to-square"></i>Edit</Button>
                               &nbsp;
                               &nbsp;
                               <Button variant="danger" onClick={()=>handleDelete(i)}>
                                <i className="fas fa-trash"></i>Delete</Button>
                           </td>
                </tr>
            })
        }
      </tbody>
    </Table>
                </div>
            </div>
        </div>
    </>
}

export default Dashboard 