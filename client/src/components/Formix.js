import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import TextField from 'material-ui/TextField';
import { TextareaAutosize } from '@material-ui/core';
import './css/formix.css';
import { movies } from './HelperFunctions';
import { handleUpload } from './HelperFunctions';

// const customFormMsg = Object.assign(messageMap, {
//     isEmail: 'Please enter a valid email address',
//     isLength:'Must be 2-50 characters',
//   })

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
      redirect: false,
      helpertext: '',
      error: false,
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.length <= 2) {
      this.setState({
        helpertext: 'Try Harder',
        error: true,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        helpertext: '',
        error: false,
      });
    }
  }

  // this method handles just the file upload
  handleFileUpload(e) {
    console.log('The file to be uploaded is: ', e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('image', e.target.files[0]);

    handleUpload(uploadData)
      .then((response) => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ image: response.secure_url });
      })
      .catch((err) => {
        console.log('Error while uploading the file: ', err);
      });
  }

  validate = () => {
    if (this.state.error === true) {
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    const movie = {
      title: this.state.title,
      director: this.state.director,
      description: this.state.description,
      image: this.state.image,
      stars: this.state.stars,
      showtimes: this.state.showtimes,
    };
    // console.log(movie);
    if (isValid) {
      movies(movie).then((res) => this.props.history.push(`/`));
    }
  };

  render() {
    return (
      <React.Fragment>
        <MuiThemeProvider>
          <Paper elevation={3}>
            <form className="containerX" onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  helpertext={this.state.helpertext}
                  type="text"
                  name="director"
                  placeholder="Director"
                  // eslint-disable-next-line
                  type="text"
                  name="title"
                  // eslint-disable-next-line
                  placeholder="Title"
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                  id="outlined-required"
                />
                <div className="error" style={{ fontSize: 12, color: 'red' }}>
                  {this.state.helpertext}
                </div>
                <br />
              </div>
              <div>
                <TextField
                  helpertext={this.state.helpertext}
                  type="text"
                  name="director"
                  placeholder="Director"
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
                >
                  {' '}
                  Up
                  <input
                    type="file"
                    name="image"
                    className="btn btn-warning addPic"
                    onChange={(e) => this.handleFileUpload(e)}
                  />
                </Button>
              </div>
              <div>
                <TextField
                  helpertext={this.state.helpertext}
                  type="text"
                  name="stars"
                  placeholder="Stars"
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                  id="outlined-required"
                />
              </div>

              <div>
                <TextareaAutosize
                  helpertext={this.state.helpertext}
                  aria-label="minimum height"
                  type="text"
                  name="description"
                  rowsMin={3}
                  columns="3"
                  placeholder="Add Description"
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                  id="outlined-required"
                />
              </div>

              <div>
                <TextField
                  helpertext={this.state.helpertext}
                  id="date"
                  type="text"
                  name="showtimes"
                  defaultValue="2017-05-24"
                  className="textField"
                  inputlabelprops={{
                    shrink: true,
                  }}
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                />
              </div>

              <div>
                <Button
                  type="submit"
                  variant="contained"
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
      </React.Fragment>
    );
  }
}

export default withRouter(Formix);
