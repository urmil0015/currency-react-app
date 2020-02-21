import React from'react';
import { Button, Dropdown, Menu, message, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import FinalComp from './FinalComp'

class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            country: '',
            price: '',
            value: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.clicked = this.clicked.bind(this); 
        this.click = this.click.bind(this);
    }
    
    componentDidMount(){
        console.log("Mounted");
        fetch("http://api.currencylayer.com/historical?access_key=094ee50f90eb780b8d36a78b57039890&date=2005-02-01")
        .then(response => response.json())
        .then(data => this.setState({
            value: data['quotes']
        }))
    }
    
    
    clicked(e){
        
        let date = new Date();
        console.log("Year: " + date.getFullYear());
        console.log("Month: " + date.getMonth()+1);
        console.log("Day: " + date.getDate());
        let finalDate = date.getFullYear() + '-' + date.getMonth()+1 + '-' + date.getDate()
        console.log("Finale date: " + finalDate)
        console.log("Country i need: " + this.state.country)
        fetch("http://api.currencylayer.com/historical?access_key=094ee50f90eb780b8d36a78b57039890&date="+finalDate+"&currencies="+this.state.country)
        .then(response => response.json())
        .then(data => this.setState({
            value: data['quotes']
        }
        ))
        console.log(this.state.price);
    }
    
    handleChange(e){
        this.setState({
            price: e.target.value
        })
    }
    
    
    click(e){
        this.setState({
            country: e['key']
        })
    }
    
    render(){
        
        console.log("This is the country: " + this.state.country);
        console.log(this.state.value);
        let con = 'USD'+this.state.country;
       /* console.log(this.state.value[con])
        console.log(this.state.price * this.state.value[con])
        console.log(this.state.country)*/
        let final_value = (this.state.price + 1) * this.state.value[con]
    
        const countries = (
        
            <Menu name='country' onClick={this.click}>
                <Menu.Item key='INR'>India</Menu.Item>
                <Menu.Item key='CNY'>China</Menu.Item>
                <Menu.Item key='JPY'>Japan</Menu.Item>
            </Menu>
        )
        
        
        return(
        
            
            <div>
            <Row>
            <Col span={15} offset={8}>
                <h1>Curreny Converter</h1>
            </Col>
            </Row>
            <Row>
            <Col span={20} offset={7}>
          <h3>Enter the amount:</h3>
            <Col span={12}>
            <input className='form-control' type='text' placeholder="$0.00" name='price' value={this.state.price} onChange={this.handleChange} />
            </Col>
            </Col>
            </Row>
            <br />
            <Row>
            <Col span={15} offset={10}>
            <Dropdown overlay={countries}>
            <Button> Select the country </Button>
  </Dropdown>
            </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Row>
            <Col span={10} offset={7}>
            
            </Col>
            </Row>
            
            <Row>
            <Col span={10} offset={7}>
            
            <FinalComp country={this.state.country} rate={this.state.value[[con]]} final={[final_value]} />
            
            
            </Col>
            </Row>
            </div>
            
        )
    }
}

export default App