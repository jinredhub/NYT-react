import React, { Component } from "react";
import Title from "../../components/Title";
import { Input, FormBtn} from "../../components/SearchForm";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem, SaveBtn } from "../../components/Result";
import axios from "axios";

// import { List, ListItem } from "../../components/List";

class Articles extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    snippet: [],
    url: [],
    // articles: [],

  };

  componentDidMount(){
    this.loadArticles();
  }

  // load articles when page opened
  loadArticles = (topic="food", startYear="2016", endYear="2017") =>{
    console.log("loadArticles!!!!!!!!!!!!!");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=db77efebc6d9484ea2f5114e3811b1e5&q="+ topic + "&begin_date=" + startYear + "0111&end_date=" + endYear + "1111"

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
      })
      console.log("new state: ", this.state.snippet);
      console.log("new url: ", this.state.url);
    }).catch((err)=>{
      console.log(err);
    });
  }


  // search NYT article when search button clicked
  handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log("search btn clicked!");
    console.log("topic: ", this.state.topic, ",startYear: ", this.state.startYear, ",endYear: ", this.state.endYear);
    this.loadArticles(this.state.topic, this.state.startYear, this.state.endYear);
  };


  // save article when save btn clicked
  saveArticle= (snippet, url) =>{
    console.log("save article");
    console.log("url: ", url, " snippet: ", snippet);

    axios.post("/articles", {
      title: snippet ,
      url: url,
    }).then((res)=>{
      // let data = res.data.response.docs;
      console.log("You saved article!!!");
    }).catch((err)=>{
      console.log(err);
    });
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
            </form>
          </Col>
        </Row>

        <Row>
          <Col size="col">
            <List>
                <ListItem 
                  url={this.state.url[0]} 
                  snippet={this.state.snippet[0]}
                >
                  <SaveBtn
                    saveArticle={this.saveArticle}
                    snippet={this.state.snippet[0]}
                    url={this.state.url[0]}
                  >
                  save
                  </SaveBtn>
                </ListItem>
                <ListItem 
                  url={this.state.url[1]} 
                  snippet={this.state.snippet[1]}
                >
                  <SaveBtn
                    saveArticle={this.saveArticle}
                    snippet={this.state.snippet[1]}
                    url={this.state.url[1]}
                  >
                  save
                  </SaveBtn>
                </ListItem>
                <ListItem 
                  url={this.state.url[2]} 
                  snippet={this.state.snippet[2]}
                >
                  <SaveBtn
                    saveArticle={this.saveArticle}
                    snippet={this.state.snippet[2]}
                    url={this.state.url[2]}
                  >
                  save
                  </SaveBtn>
                </ListItem>
            </List>
          </Col>
        </Row>

        <Row>
          <Col size="col">
            <List>
              
            </List>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Articles;
