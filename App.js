import { useState, useEffect } from "react";
import EmployeeForm from "./components/EmployeeForm.js";
import EmployeeList from "./components/EmployeeList.js";
export default function App() {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);
    useEffect(() => { setEmployees([{ id: 1, name: "Ali Khan", email: "ali@gmail.com", position: "Frontend Developer", department: "IT", salary: "120000" }]); }, []);
    const save = e => { if (editingEmployee) { setEmployees(employees.map(x => x.id === editingEmployee.id ? { ...e, id: x.id } : x)); setEditingEmployee(null); } else setEmployees([...employees, { ...e, id: Date.now() }]); };
    return <div className="container"><h1>Employee Management System</h1><EmployeeForm addEmployee={save} editingEmployee={editingEmployee} /><EmployeeList employees={employees} editEmployee={setEditingEmployee} deleteEmployee={id => setEmployees(employees.filter(e => e.id !== id))} /></div>
}