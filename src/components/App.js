import React from "react";
import SocialCard from "./SocialCard";

class App extends React.Component {
  setId(id) {
    return id;
  }

  setEndPoint(endpoint) {
    return endpoint;
  }

  setSecondEndPoint(secondendpoint) {
    return secondendpoint;
  }

  render() {
    return (
      <div className="App container text-center mt-4">
        <SocialCard
          endpoint={this.setEndPoint("users")}
          secondendpoint={this.setSecondEndPoint("posts")}
          setId={this.setId(1)}
          comments={2} retweet={10} heart={20}
        />
      </div>
    );
  }
}

export default App;
