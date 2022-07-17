import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: '',
  }

  handleInput = e => {
    const {value} = e.currentTarget;
    this.setState({query: value.trim().toLowerCase()})
  }

  handleSubmit = e => {
    e.preventDefault();
    const {query} = this.state;
    this.props.onSubmit(query);
    this.setState({query: ''});
  }

  render() {
    const {query} = this.state;
    return (
    <SearchFormStyled onSubmit={this.handleSubmit}>
      <InputSearch onChange={this.handleInput} value={query} placeholder='enter name'/>
      <FormBtn type='submit'>
        <FiSearch size='16px'/>
      </FormBtn>
    </SearchFormStyled>

    );
  }
}
