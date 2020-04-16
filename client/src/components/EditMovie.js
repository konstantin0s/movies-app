import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import TextField from 'material-ui/TextField';
import { TextareaAutosize } from '@material-ui/core';
import './css/formix.css';
import {handleUpload} from './HelperFunctions';
import axios from 'axios';


class EditMovie extends Component {
 constructor(props) {
   super(props);

   this.state = {
      movie: {},
      helpertext: '',
      error: false 
   }

   this.handleFileUpload = this.handleFileUpload.bind(this);
   this.onChange = this.onChange.bind(this);

 }

  onChange(e) {
    const state = this.state.movie;
    state[e.target.name] = e.target.value;

    if (e.target.value.length <= 2) {
      this.setState({
        helpertext: 'Try Harder', error: true });
    } else {
      this.setState({ 
        movie:state,
        helpertext: '',  
        error: false 
      });
    }
}


// this method handles just the file upload
handleFileUpload(e) {
console.log("The file to be uploaded is: ", e.target.files[0]);

const uploadData = new FormData();
// imageUrl => this name has to be the same as in the model since we pass
// req.body to .create() method when creating a new thing in '/api/things/create' POST route
uploadData.append("image", e.target.files[0]);

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


componentDidMount() {
    const { params } = this.props.match;

    axios.get(`/one/${params.id}`)
      .then(res => {
        this.setState({ movie: res.data });
        // console.log(this.state.movie);
      })
      .catch(err => console.log(err));
  }


 handleSubmit = (e) => {
  e.preventDefault();

  const {
    title, director, description, image, stars, showtimes, _id } = this.state.movie;
  axios.put(`/movie/edit/${_id}`, {title, director, description, image, stars, showtimes })
  .then((result) => {
    this.props.history.push(`/one/${_id}`);
  });
}



  render() {
      const { title, description, director, showtimes, stars} = this.state.movie;
      // console.log(this.state.movie);
    return (
<div className="add-movie">
      <MuiThemeProvider>

<Paper  elevation={3} >
<form className="containerX" onSubmit={this.handleSubmit}>
          <div>
            <TextField type="text" name="title" value={title || ''}
            placeholder="Title" onChange={this.onChange}
            error={this.state.error.toString()}
            required
            id="outlined-required"
            />
             <div className="error" 
             style={{ fontSize: 12, color: "red"}}>{this.state.helpertext}</div><br />
          </div>
          <div>
            <TextField type="text" name="director" placeholder="Director" value={director || ''}
              onChange={this.onChange}
              error={this.state.error.toString()}
              required
              id="outlined-required"
             />
          </div>
          <div>
           <Button
        variant="contained"
        color="default"
        className="upload-button"
        startIcon={<CloudUploadIcon />}
      > Up
           <input type="file" name="image" className="btn btn-warning addPic"
            onChange={(e) => this.handleFileUpload(e)}
            error={this.state.error.toString()}
            required
            id="outlined-required"
            /> 
      </Button>
            </div> 
          <div>
            <TextField type="text" name="stars" value={stars || ''}
             placeholder="Stars" onChange={this.onChange}
             error={this.state.error.toString()}
             required
             id="outlined-required"
             />
          </div>
          

          <div>
          <TextareaAutosize aria-label="minimum height" type="text" name="description"
           rowsMin={3} placeholder="Add Description"  value={description || ''}
            onChange={this.onChange}
            error={this.state.error.toString()}
            required
            id="outlined-required"
            />
          
          </div>

          <div>
          <TextField
  id="date"
  type="text"
  name="showtimes"
  value={showtimes || ''}
  className="textFieldx"

  inputlabelprops={{
    shrink: true,
  }}
  onChange={this.onChange}
  error={this.state.error.toString()}
  required
  id="outlined-required"
  />
          </div>
      
          <div>
            <Button
        variant="contained"
        type="submit"
        color="primary"
        size="small"
        className="save-btn"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
          </div>
        </form>
</Paper>
    </MuiThemeProvider>
    </div>
    )
  }
}


export default EditMovie;
