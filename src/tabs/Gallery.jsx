import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state ={
    query: '',
    images: [],
    page: 1,
    isEmpty: false,
  }

  componentDidUpdate(_, prevState){
    const {query, page} = this.state;
    
    if(prevState.query !== query || prevState.page !== page){
      this.getPhotos(query, page);
      

    }
  }

  getPhotos = async(query, page)=>{
    if(!query)return;
    try {
      const {photos, total_results, per_page, page: currentPage} = await ImageService.getImages(query, page);
      console.log(photos, total_results, per_page, currentPage);
      if(photos.length === 0) {
        this.setState({isEmpty: true});
      }
    } catch (error) {
      
    }
  }

  onSubmit = (query)=>{
    this.setState({
      query,
      images: [],
      page: 1,
    })
  }

  render() {
    const {isEmpty} = this.state;
    return (
      <>
      <SearchForm onSubmit={this.onSubmit}/>
      {isEmpty &&  <Text textAlign="center">Sorry. There are no images ... 😭</Text>}

      </>
    );
  }
}
