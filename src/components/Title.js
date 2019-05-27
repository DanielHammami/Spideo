import React from 'react'

const API = 'https://api.themoviedb.org/3/movie/299534?api_key=e1aa6dbdeb20d548974035f0edcb4a3f'
const image = 'http://image.tmdb.org/t/p/w342'


class Title extends React.Component {
    constructor() {
        super()
        
        this.state = {
            original_title: null,
            poster_path: null,
            overview: null
        }
    }

    componentDidMount() {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ 
            original_title: data.original_title,
            poster_path: data.poster_path,
            overview: data.overview
          }))
        .catch(error => error)
    }

    render() {
        const { original_title, poster_path, overview } = this.state

        return(
            <div className='presentation-container'>
                <img className='poster' src={image + poster_path} alt={original_title}/>
                <div className='presentation'>
                    <h1>{original_title}</h1>
                    <p className='synopsis_title'>Synopsis</p>
                    <p className='synopsis_detail'>{overview}</p>
                </div>
            </div>
        )
    }
}

export default Title