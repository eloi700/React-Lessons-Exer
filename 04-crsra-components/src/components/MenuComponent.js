import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

export default class Menu extends Component {
  state = {
    selectedDish: null,
  };

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish !== null)
      return (
        <Card>
          <CardImg width='50%' src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
              {dish.name}
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    //render using map() method
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className='col-12 col-md-5 mt-1'>
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                {dish.name}
              </CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>{menu}</div>
        <div className='row'>{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}
