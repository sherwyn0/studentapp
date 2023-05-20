import React, { Component } from "react";
import axios from "axios";
export default class CreateStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: ""
        }
    }
    onIdChange = (e) => {
        this.setState({ id: e.target.value })
    }

    onNameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    onEmailChange = (e) => {
        this.setState({ email: e.target.value })
    }
    handleSubmit = (e) => {
        const student = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email
        }
        axios.post("http://localhost:3001/student", student)
        // this.setState({students:this.state.students.push(student)})
        this.props.history.push("/student-list")
    }
    render() {
        return (
            <div>
                <p><h1>Create Student Form!</h1></p>
                <div class="row">
                    <div class="mx-auto col-10 col-md-8 col-lg-6">
                        <form>
                            <div className="form-group">
                                <label for="id">ID:</label>
                                <input type="text" className="form-control" id="id" onChange={this.onIdChange} />
                            </div>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" id="name" onChange={this.onNameChange} />
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" onChange={this.onEmailChange} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={() => this.handleSubmit()}>Create</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}