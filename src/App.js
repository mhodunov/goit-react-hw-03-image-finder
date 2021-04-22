import React, { Component } from 'react';

import Searchbar from './components/Searchbar.js';
import ImageGallery from './components/ImageGallery.js';
import Button from './components/Button.js';
import Modal from './components/Modal.js';

import Loader from 'react-loader-spinner';
import _ from 'lodash';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import "./index.scss";

import { fetchImages } from './api/pixabayApi.js';
class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    selectedImg: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getImages();
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      images: [],
      query: newQuery,
      page: 1,
      error: null,
      selectedImg: '',
      showModal: false,
    });
  };

  getImages = () => {
    const { query, page } = this.state;

    const options = {
      query,
      page,
    };

    this.setState({ isLoading: true });

    fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  setLargeImg = url => {
    this.setState({ selectedImg: url });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, selectedImg } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery
            images = {images}
            onClick = {this.setLargeImg}
          />
          {isLoading && (
            <Loader
              type="TailSpin"
              color="#00BFFF"
              height={80}
              width={80}
              className="loader"
            />
          )}
        {!_.isEmpty(images) && !isLoading && (
          <Button onLoadMore={this.getImages} />
        )}
        {showModal && (
          <Modal src={this.state.selectedImg} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
