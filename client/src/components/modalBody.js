import React, { Component } from "react"


class ModalBodyContent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            modalType: props.modalType
        }
        this.renderBodyType = this.renderBodyType.bind(this)
    }

    renderBodyType = () => {
        switch(this.state.modalType) {
            case "editInterest":
                return (<div>Edit Interest</div>)
            case "editNotes":
                return (<div>Edit Notes</div>)
            case "editTask":
                return (<div>Edit Task</div>)
            case "editComm":
                return (<div>Edit Comm</div>)
            case "editContact":
                return (<div>Edit Contact</div>)
            case "addTask":
                return (<div>Add Task</div>)
            default:
                return null
        }
        
    }

    render () {
        return (
            <div>
                {this.renderBodyType()}
            </div>
        )
    }
}

export default ModalBodyContent