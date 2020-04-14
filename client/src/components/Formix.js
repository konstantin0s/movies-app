  import React, {Component} from 'react';
  import { faUpload } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import RaisedButton from 'material-ui/RaisedButton';
  import TextField from 'material-ui/TextField';
  import { TextareaAutosize } from '@material-ui/core';
  import './css/formix.css';
  import { movies } from './HelperFunctions';
  import {handleUpload} from './UserFunctions';
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

     this.state = {
      title: '',
      director: '',
      description: '',
      body: '',
      image: '',
      stars: '',
      showtimes: '',
      error: null
     }

   }

   onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
}

// this method handles just the file upload
handleFileUpload(e) {
  console.log("The file to be uploaded is: ", e.target.files[0]);

  const uploadData = new FormData();
  // imageUrl => this name has to be the same as in the model since we pass
  // req.body to .create() method when creating a new thing in '/api/things/create' POST route
  uploadData.append("imageUrl", e.target.files[0]);
  
  handleUpload(uploadData)
  .then(response => {
      // console.log('response is: ', response);
      // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
      this.setState({ image: response.secure_url });
    })
    .catch(err => {
      console.log("Error while uploading the file: ", err);
    });
}



   handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      title: this.state.title,
      director: this.state.director,
       description: this.state.description,
       image: this.state.image,
      stars: this.state.stars,
      showtimes: this.state.showtimes
    
    }
    console.log(movie);

    movies(movie).then(res => {
         this.props.history.push('/movies');
    })
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
  