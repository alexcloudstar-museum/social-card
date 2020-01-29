import React from "react";
import Avatar from "./avatar/Avatar";
import Body from "./body/Body";
import API from "./api/api";

class SocialCard extends React.Component {
  state = {
    persons: [],
    posts: []
  };

  componentDidMount() {
    API.get(`${this.props.endpoint}/${this.props.setId}`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });

    API.get(`${this.props.secondendpoint}/${this.props.setId}`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    const { name, username, website } = this.state.persons;
    const { title, body } = this.state.posts;
    const {comments, retweet, heart} = this.props
    return (
      <div className="SocialCard mb-3 row">
        <Avatar />
        <Body name={name} username={username} website={website} title={title} body={body} comments={comments} retweet={retweet} heart={heart} />
      </div>
    );
  }
}

export default SocialCard;
