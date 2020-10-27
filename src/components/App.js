import React from 'react'
import SocialCard from './SocialCard'

class App extends React.Component {
    setId(id) {
        return id;
    }

    setEndPoint(endpoint){
        return endpoint
    }

    setSecondEndPoint(secondendpoint) {
        return secondendpoint;
    }

    render() {
        return (
            <div className="App container text-center mt-4">
                <SocialCard 
                    endpoint={this.setEndPoint('users')}
                    secondendpoint={this.setEndPoint('posts')}
                    setId={this.setId(3)}
                    comments={15}
                    retweet={87}
                    heart={10}
                />
            </div>
        )
    }
}

export default App;