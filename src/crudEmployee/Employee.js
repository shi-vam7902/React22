import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'
import { EmployeeRegistration } from './EmployeeRegistration'

export const Employee = () => {

    const deleteEmployee = (emp)=>{
        employees = employees.filter((e) => e.id !== emp.id);
        console.log(employees)
        setemployees(employees)
    }
    
    const addEmployee = (emp)=>{
        console.log(emp);
        employees=[...employees,emp]
        setemployees(employees)
        
    }
    var [employees,setemployees] = useState([]);
    
    return (
        <div>
            <EmployeeList employees={employees} deleteEmployee={deleteEmployee}/>
            <EmployeeRegistration addEmployee={addEmployee} />
        </div>
    )
}
