import React from 'react'
import Header from '../../components/inventory/header'
import Sidebar from '../../components/staff-manager/Sidebar'

function salaryassign() {
  return (

    <div>
        <Header/>
        <Sidebar/>
       <div class="container mt-5">
      <h2 class="text-center mb-4 form-title">Assign salary</h2>
      <div class="row justify-content-center">
          <div class="col-md-8">
              <form action="#" method="POST" id="employeeForm">
                  <div class="mb-3">
                      <label for="employeeID" class="form-label">Employee ID</label>
                      <input type="text" id="employeeID" name="employeeID" class="form-control" required/>
                  </div>
                  <div class="mb-3">
                      <label for="firstName" class="form-label">First Name</label>
                      <input type="text" id="firstName" name="firstName" class="form-control" required/>
                  </div>
                  <div class="mb-3">
                      <label for="lastName" class="form-label">Last Name</label>
                      <input type="text" id="lastName" name="lastName" class="form-control" required/>
                  </div>
                  <div class="mb-3">
                      <label for="nic" class="form-label">Month</label>
                      <input type="text" id="nic" name="nic" class="form-control" required/>
                  </div>
                  <div class="mb-3">
                      <label for="email" class="form-label">Amount</label>
                      <input type="email" id="email" name="email" class="form-control" required/>
                  </div>
                  <div class="d-grid gap-2">
                      <button type="submit" class="btn btn-primary">Assign</button>
                  </div>
              </form>
  </div>
  </div>
  </div>
  </div>
    
  )
}

export default salaryassign
