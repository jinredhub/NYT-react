import React, { Component } from "react";
import Title from "../../components/Title";
// import { Input, FormBtn} from "../../components/SearchForm";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem, SaveBtn, DeleteBtn } from "../../components/Result";
// import axios from "axios";
// import {Cards} from "../../components/Cards";


class NoMatch extends Component {

  render() {

    return (
      <Container>
        <Row>
          <Col size="12">
            <Title>
              <h1>404 Page Not Found</h1>
            </Title>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default NoMatch;
