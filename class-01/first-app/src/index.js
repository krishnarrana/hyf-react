import React from "react";
import ReactDOM from "react-dom";
import "./app.css"

class App extends React.Component {
  render() {
      const authorList=[
            {
              author:  {id:"1",name: "BJ"},
              body: "Lorem ipsum dolor sit amet, consectet"
            },
            {
                author:  {id:"2",name: "MJ"},
                body: "Lorem ipsum dolor sit amet, consectet"
            },
            {
                author:  {id:"3",name: "DJ"},
                body: "Lorem ipsum dolor sit amet, consectet"
            },
            {
                author:  {id:"4",name: "RJ"},
                body: "Lorem ipsum dolor sit amet, consectet"
            },
      ];
    return (
        <div className="container">
            <h1>Author List</h1>
            <div className="comment-container">
                {authorList.map((author)=>(
                    <Comment author= {author.author} body={author.body} key={author.author.id}/>
                ))}
            </div>
        </div>
    )
  }
}

class Comment extends React.Component {
    render() { 
        return ( 
            <div className="comment">
                <h1>{this.props.author.name}</h1>
                <p>{this.props.body}</p>
            </div>
         );
    }
}
 

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);