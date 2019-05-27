import React from 'react'

const apiCasts = 'http://api.themoviedb.org/3/movie/299534/casts?api_key=e1aa6dbdeb20d548974035f0edcb4a3f'

class Casting extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            casts: []
        }
    } 

    componentDidMount() {
        fetch(apiCasts)
        .then(response => response.json())
        .then(data => this.setState({
            casts: data.cast
        }))
        .catch(error => error)
    }

    render(){
        const { casts } = this.state

        return(
            <div className="casting-container">
                <h1>Casting</h1>
                <p>{casts.map(cast => cast.name + ' --- ')}</p>
            </div>
        )
    }
}

export default Casting