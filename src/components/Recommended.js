import React from 'react'

const apiSimilar = 'https://api.themoviedb.org/3/movie/299534/similar?api_key=e1aa6dbdeb20d548974035f0edcb4a3f&language=en-US&page=1'
const images = 'http://image.tmdb.org/t/p/w92'

class Recommended extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: []
        }
    }

    componentDidMount() {
        fetch(apiSimilar)
        .then(response => response.json())
        .then(data => this.setState({
            result: data.results
        }))
        .catch(error => error)
    }

    deleteSimilar = (index) => {
       let element = document.querySelector("." + index)
       element.style.display = 'none';
    }

    render(){
        const { result } = this.state

        return(
            <div className="similar-container">
                <h1 className="other-movies">You might also like</h1>
                <div className="poster">
                    {result.map(r => 
                        <div key={r.id} onClick={() => this.deleteSimilar(r.id)} className={r.id}>
                            <img src={images + r.poster_path} alt={r.original_title}/>
                            <p>{r.original_title}</p>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default Recommended