import React, { Component } from "react";
import Title from "../../components/Title";
import { Input, FormBtn} from "../../components/SearchForm";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem, SaveBtn, DeleteBtn } from "../../components/Result";
import axios from "axios";
import {Cards} from "../../components/Cards";


class Articles extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    snippet: [],
    url: [],
    // articles: [],
    savedArticles: [],
  };

  componentDidMount(){
    this.loadArticles();
    this.loadSavedArticles();
  }


  // delete saved articles on btn click
  deleteArticle = (snippet) =>{
    axios.delete("/articles/" + snippet)
    .then((res)=>{

      console.log("deleted article");
      this.loadSavedArticles();

    }).catch((err)=>{
      console.log(err);
    });
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
      for(let i=0; i<5;i++){
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

  // load saved articles
  loadSavedArticles = () =>{
    axios.get("/articles")
    .then((res)=>{

      console.log("loadArticles res.data", res.data);
      let savedArticles = [];

      for(let i=0; i<res.data.length; i++){
        savedArticles.push(res.data[i]);
      }
      this.setState({
        savedArticles: [...savedArticles],
      })
      console.log("new savedArticles: ", this.state.savedArticles);
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
      console.log("You saved article!!!");
      this.loadSavedArticles();
    }).catch((err)=>{
      console.log(err);
    });
  }


  render() {
    console.log("=======================",this.state)

    return (
        <div>
        <Row>
          <Col size="12">
            <Title>
              <h1>New York Times Article Search</h1>
              <h5>search and save your favorite articles</h5>
            </Title>
          </Col>
        </Row>
      <Container>


        <Row>
          <Col size="12">
            <Cards
              header="Search"
            >
             <form style={{margin: 30}}>
                <Input 
                  value={this.state.topic}
                  id="topic"
                  placeholder="required"
                  label="Topic"
                  onChange={(ev)=>{
                    this.setState({topic: ev.target.value});
                  }}
                />
                <Input
                  value={this.state.startYear}
                  id="startYear"
                  placeholder="required"
                  label="Start Year"
                  onChange={(ev)=>{
                    this.setState({startYear: ev.target.value});
                  }}
                />
                <Input
                  value={this.state.endYear}
                  id="endYear"
                  placeholder="required"
                  label="End Year"
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
            </Cards>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col size="12">
            <Cards
              header="Result"
            >
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
                <ListItem 
                  url={this.state.url[3]} 
                  snippet={this.state.snippet[3]}
                >
                  <SaveBtn
                    saveArticle={this.saveArticle}
                    snippet={this.state.snippet[3]}
                    url={this.state.url[3]}
                  >
                  save
                  </SaveBtn>
                </ListItem>
                <ListItem 
                  url={this.state.url[4]} 
                  snippet={this.state.snippet[4]}
                >
                  <SaveBtn
                    saveArticle={this.saveArticle}
                    snippet={this.state.snippet[4]}
                    url={this.state.url[4]}
                  >
                  save
                  </SaveBtn>
                </ListItem>
              </List>            
            </Cards>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col size="12">
            <Cards
              header="Saved Articles"
            >
              {this.state.savedArticles.length ? (
                <List>
                {this.state.savedArticles.map((value)=>(
                  <ListItem
                  url={value.url}
                  snippet={value.title}
                  >
                  <DeleteBtn
                  snippet={value.title}
                  url={value.url}
                  deleteArticle={this.deleteArticle}
                  >
                    delete
                  </DeleteBtn>
                  </ListItem>              
                ))}
                </List>
              ) : (<h3>no saved articles</h3>)}
            </Cards>
          </Col>
        </Row>

        <br/><br/>
      </Container>
      </div>
    );
  }
}

export default Articles;
