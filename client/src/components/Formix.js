  import React, {Component} from 'react';
  import { faUpload } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import RaisedButton from 'material-ui/RaisedButton';
  import TextField from 'material-ui/TextField';
  import { TextareaAutosize } from '@material-ui/core';
// import { withStyles } from 'material-ui/core/styles';


// const customFormMsg = Object.assign(messageMap, { 
//     isEmail: 'Please enter a valid email address',  
//     isLength:'Must be 2-50 characters', 
//   })

const containerX = {
  display: 'flex',
  flexWrap: 'wrap'
};



const textFieldx = {
  marginLeft: '1em',
  marginRight: '1em',
  width: '200px'
};

  
 class Formix extends Component {
   constructor(props) {
     super(props);

   }


   handleFileUpload = (e, file) => console.log(e.target.result, file.name);

   handleSubmit = (values, pristineValues) => {
     // get all values and pristineValues on form submission
   }




    render() {
      return (

        <MuiThemeProvider>
<React.Fragment>
<form className={containerX} onSubmit={this.handleSubmit}>
            <div>
              <TextField type="text" name="title" placeholder="Title" label="Title"/>
            </div>
            <div>
              <TextField type="text" name="director" placeholder="Director" label="Director"/>
            </div>
            <div>
            <label className="custom-file-upload">
             Image <FontAwesomeIcon icon={faUpload} />
             <input type="file" className="btn btn-warning addPic" onChange={(e) => this.handleFileUpload(e)} /> 
                  </label>
              </div> 
            <div>
              <TextField type="text" name="stars" placeholder="Stars" label="Stars"/>
            </div>

            <div>
            <TextareaAutosize aria-label="minimum height" type="text" name="description"
             rowsMin={3} placeholder="Add Description" />
            
            </div>
            <div>
            <TextField
    id="date"
    label="ShowTime"
    type="date"
    defaultValue="2017-05-24"
    className={textFieldx}
    InputLabelProps={{
      shrink: true,
    }}
  />
            </div>
        
            <div>
              <RaisedButton type="submit" label="Submit" primary={true} style={style}/>
            </div>
          </form>
</React.Fragment>
      </MuiThemeProvider>

      )
    }
  }
  

  export default Formix;

  const style = {
    margin: 4
  };
  