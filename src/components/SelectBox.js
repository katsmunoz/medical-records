import React from 'react';

class SelectBox extends React.Component{

    constructor() {
        super();
        this.state = {
            name:null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        
        this.setState({
            name: event.target.value
        });
        
    }

    submit() {
        console.warn(this.state)
    }

    render() {
        return (
            <div>
                <div className="patients">
                                <div className="form-group">
                                    <select className="form-control" name="name" onChange={this.handleInputChange}>
                                        <option selected>Select Patient</option>
                                        <option value="1">John Oliver</option>
                                        <option value="2">Bob Martin</option>
                                        <option value="3">Helena Fernández</option>
                                        <option value="4">Francesco De Mello</option>
                                    </select>
                                </div>

                            <div className="submitBtn">
                                    <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Show</button>
                            </div>
                        
                    </div>
                </div>
        )  
    }
}

export default SelectBox;