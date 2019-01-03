import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import { seed } from './db';

const Title = ({ title })=> <h1>{ title }</h1>;

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      companies : [],
    }; 
    //this.addRandomUser = this.addRandomUser.bind(this);
  }
  componentDidMount(){
    const companies = seed(10);
    this.setState({ companies });
  }
  render(){
    const { title } = this.props;
    const { companies } = this.state;
    return ( 
      <div>
        <Title title={ title }/>
        <ul>
          {
            companies.map( company => <li key={ company.id }>{ company.name }</li>)
          }
        </ul>
      </div>
    );
  }   
}
