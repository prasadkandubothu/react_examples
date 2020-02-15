import React, { Component } from 'react';
import { buyCake } from '../redux/cake/actions-cake';
import { connect } from 'react-redux';

class Cake extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Number of Cakes Available : {this.props.numOfCakes}
                <br/>
                <button onClick={this.props.buyCake}>Buy a cake</button>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
        return {
            numOfCakes : state.numOfCakes
        }
}

const mapDispathcToState = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispathcToState)(Cake)