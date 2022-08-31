import { render } from "@testing-library/react";
import React from "react";

class DatePicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedFrom: '4',
            depart: depart,
            returning: returing
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }

    handleChange(event) {    
        this.setState({
            selectedFrom: event.target.selectedFrom,
            depart: event.target.depart,
            returing: event.target.return
            });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    pickDepart = (event) => {
        this.setState({depart: event.target.depart});
        setMinDate(event.target.depart);
    };

    pickReturn = (event) => {
        this.setState({returning: event.target.return});
    };
    render(){
        return(
    <div className='flex-children'>
        <span className='flex-line'>
            <label for='depart'><i class="far fa-calendar-alt"></i> Depart: </label>
            <input type='date' id='depart' value={this.state.depart} min={today} onChange={this.pickDepart} />
        </span>
     <span className='flex-line'>
        <label for='return'> Return: </label>
        <input type='date' id='return' value={this.state.returning} min={minReturn} onChange={this.pickReturn} />
     </span>
</div>
        )
    }
}

