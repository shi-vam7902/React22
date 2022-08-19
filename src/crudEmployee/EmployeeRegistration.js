import React, { useState } from 'react'

export const EmployeeRegistration = (props) => {
    const [id, setid] = useState('')
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [salary, setsalary] = useState('')
    const [status, setstatus] = useState('')
    
    const submit = (e) => {
        e.preventDefault()
        var emp = {
            id: id,
            name: name,
            age: age,
            salary: salary,
            status: false
        }
        props.addEmployee(emp)
    }
    return (
        <div>
            <form action='' onSubmit={submit}>
                <div class="form-group">
                    <label htmlFor='id'>Id</label>
                    <input type="text" onChange={(e) => {
                        setid(e.target.value)
                    }} placeholder="Enter Id" className="form-control" id="formGroupExampleInput2"/>
                </div>
                <div class="form-group">
                    <label htmlFor='name'>Name</label>
                    <input type="text" onChange={(e) => {
                        setname(e.target.value)
                    }} placeholder="Enter Name" className="form-control" id="formGroupExampleInput2"/>
                </div>

                <div class="form-group">
                    <label htmlFor='age'>Age</label>
                    <input type="text" onChange={(e) => {
                        setage(e.target.value)
                    }} placeholder="Enter Age" className="form-control" id="formGroupExampleInput2"/>
                </div>

                <div class="form-group">
                    <label htmlFor='salary'>Salary</label>
                    <input type="text" onChange={(e) => {
                        setsalary(e.target.value)
                    }} placeholder="Enter Salary" className="form-control" id="formGroupExampleInput2"/>
                </div>

                <div class="form-group">
                    <label htmlFor='status'>Status</label>
                    <input type="text" onChange={(e) => {
                        setstatus(e.target.value)
                    }} className="form-control" id="formGroupExampleInput2" placeholder="Enter Status" />
                </div>
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>//main div
    )
}
