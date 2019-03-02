import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			images: []
		}

		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	};

	
	// method 1: using promises
	/*onSearchSubmit(term) {
		const url = 'https://api.unsplash.com/search/photos';
		axios.get(url, {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID cf05c928fd3322704dd5f1d22bbae8f407a8e932fc07f950f7962b48105b7114'
			}
		})
		.then((res) => {
			console.log(res.data.results);
		});
	}*/
	

	// method 2: using async & await
	async onSearchSubmit(term) {
		// method 1: using promises
		const response = await unsplash
		.get('/search/photos', {
			params: { query: term }
		});

		this.setState({ images: response.data.results });
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }} >
				<SearchBar onSubmit={ this.onSearchSubmit } />
				Found: {this.state.images.length}
				<ImageList images={ this.state.images } />
			</div>
		);
	}
}

export default App;
