import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Title from "../../components/Title";
import { Input, FormBtn} from "../../components/SearchForm";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    // books: [],
    topic: "",
    startYear: "",
    endYear: "",
  };

  handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log("search btn clicked!");
    console.log( "topic: ", this.state.topic);

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

      </Container>
    );
  }
}

export default Articles;
