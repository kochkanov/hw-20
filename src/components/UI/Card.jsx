import React from 'react'
import './Card.css'
import { Component } from 'react';


class  Card extends Component {
	
		
	
	render(){
		const classes = 'card ' + this.props.className
	return <div className={classes}>{this.props.children}</div>
	}

}

export default Card
