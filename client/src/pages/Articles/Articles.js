import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Title from "../../components/Title";
import { Input, FormBtn} from "../../components/SearchForm";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/Result";
import axios from "axios";

// import { List, ListItem } from "../../components/List";

class Articles extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    snippet: [],
    url: [],
    articles: [],
  };

  componentDidMount(){
    this.loadArticles();
  }

  loadArticles = () =>{
    console.log("loadArticles!!!!!!!!!!!!!");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=db77efebc6d9484ea2f5114e3811b1e5&begin_date=19991222&end_date=20001111"

    axios.get(
      url: url,
    ).then((res)=>{
      let data = res.data.response.docs;
      console.log("state: ", this.state.data);
      console.log("log1: ", data);
      let newSnippet = [];
      let newUrl = [];
      for(let i=0; i<data.length;i++){
        newSnippet.push(data[i].snippet);
        newUrl.push(data[i].web_url);
      }
      this.setState({
        snippet: [... newSnippet],
        url: [... newUrl],
        // articles: data
      })
      console.log("new state: ", this.state.snippet);
      console.log("new url: ", this.state.url);
    }).catch((err)=>{
      console.log(err);
    });
  }

  // renderResult = (arr) =>{
  //   console.log("rendering result!!!!!!");
  //   let dataArr = arr;
  //   console.log("dataArr: ", dataArr);

  //   let newList = document.createElement("ListItem");
  //   newList.innerHTML = dataArr[3].headline.main;
  //   let target = document.getElementById("result");
  //   target.appendChild(newList);
    // for (let i=0; i<dataArr.length; i++){
    //   selList.appencChild(dataArr[i]);
    // }
  // }

  // search article
  handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log("search btn clicked!");
    console.log( "topic: ", this.state.topic);
  };

  // save article when save btn clicked
  saveArticle= (snippet, url) =>{
    console.log("save article");
    console.log("url: ", url, " snippet: ", snippet);

  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="col">
            <Title>
              <h1>New Yourk Times Article Scrubber</h1>
              <p>Search for and annotate articles of interest!</p>
            </Title>
          </Col>
        </Row>

        <Row>
          <Col size="col">
            <form>
              <Input 
                value={this.state.topic}
                id="topic"
                placeholder="Topic (required)"
                onChange={(ev)=>{
                  this.setState({topic: ev.target.value});
                }}
              />
              <Input
                value={this.state.startYear}
                id="startYear"
                placeholder="1999 (required)"
                onChange={(ev)=>{
                  this.setState({startYear: ev.target.value});
                }}
              />
              <Input
                value={this.state.endYear}
                id="endYear"
                placeholder="2017 (required)"
                onChange={(ev)=>{
                  this.setState({endYear: ev.target.value});
                }}
              />
              <FormBtn 
                disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
              <p>current id: {this.state.id}</p>
            </form>
          </Col>
        </Row>

        <Row>
          <Col size="col">
            <List>
                <ListItem url={this.state.url[0]} saveArticle={this.saveArticle}>{this.state.snippet[0]}</ListItem>
                <ListItem url={this.state.url[1]} saveArticle={this.saveArticle}>{this.state.snippet[1]}</ListItem>
                <ListItem url={this.state.url[2]} saveArticle={this.saveArticle}>{this.state.snippet[2]}</ListItem>
              })}
            </List>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Articles;
