import React from 'react';
import axios from 'axios';

export default class StudentList extends React.Component{
    constructor(props){
        super(props)  
        this.state = {
            students : []
        }
    }

    deleteStudent(id){
        axios.delete("http://localhost:3001/student/" + id)
        this.showItems()
    }

    showItems(){
        axios.get("http://localhost:3001/student")
        .then(res=>{
            this.setState({students:res.data})
        })
    }
    componentDidMount(){
        this.showItems()
    }
    
    render(){
        return(
            <div>
                <table className='table table-striped table-bordered'>
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student=>
                                <tr key = {student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>
                                       <td><button type="button" class="btn btn-danger" onClick={()=>this.deleteStudent(student.id)}>Delete</button></td> 
                                        <td><button type="button" class="btn btn-secondary">Edit</button></td>
                                        <td><button type="button" class="btn btn-info">Info</button></td>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}