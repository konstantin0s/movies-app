import React, { Component } from 'react';
import Formix from './Formix';
import './css/addmovie.css';

 class AddMovie extends Component {
     
    render() {
        return (
            <div className="add-movie">
                <Formix />
            </div>
        )
    }
}


export default AddMovie;