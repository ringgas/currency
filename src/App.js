import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Container,Row,Col,Table } from 'react-bootstrap';
import ValueExchange from './components/valueExchange';
import getExchangeAction from './actions/getExchangeAction';
import getBuyAction from './actions/getBuyAction';
import getSellAction from './actions/getSellAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import Left from './components/titleTab';

const App = props => {
  useEffect(() => {
    props.getExchange();
    props.getBuy();
    props.getSell();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="body">
      <Container>
        <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Table>
                  <thead>
                      <tr style={{textAlign : "center"}}>
                          <th><h4 className="textColor">CURRENCY</h4></th>
                          <th><h4 className="textColor">WE BUY</h4></th>
                          <th><h4 className="textColor">EXCHANGE RATE</h4></th>
                          <th><h4 className="textColor">WE SELL</h4></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr style={{textAlign : "center"}}>
                          {/* <td><Left data={props.buy}/></td> */}
                          <td><ValueExchange data={props.buy}/></td>
                          <td><ValueExchange data={props.exchange}/></td>
                          <td><ValueExchange data={props.sell}/></td>
                      </tr>
                  </tbody>
              </Table>
              
              <div className="textColor" style={{width : "100%", textAlign : "center"}}>
                  Base Currency Is IDR <br/> 
                  As For The API https://api.exchangeratesapi.io/ is used
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    exchange : state.exchange,
    buy : state.buy,
    sell : state.sell,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getExchange: () => dispatch(getExchangeAction()),
    getBuy: () => dispatch(getBuyAction()),
    getSell: () => dispatch(getSellAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
