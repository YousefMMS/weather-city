import
React, {
  Component
} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './index.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.textInputRef = React.createRef();
  }

  submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const cityName = this.textInputRef.current.value;

    const { onCitySubmitted } = this.props;

    onCitySubmitted(cityName);
  }

  render() {
    return (
      <div className="SearchForm">
        <form onSubmit={this.submitForm}>
          <div className="search-fields">
            <div className="form-control">
              <TextField
                id="outlined-uncontrolled"
                label="City Name"
                placeholder="Type your city name"
                margin="normal"
                variant="outlined"
                inputRef={this.textInputRef}
                // onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <Button variant="contained" color="primary" type="submit">
                Get Weather
              </Button>
            </div>
            {/* <input type="text" ref={this.textInputRef} onChange={this.handleChange} /> */}
            {/* <input type="submit" value="Search" /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
