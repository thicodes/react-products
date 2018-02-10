import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProduct } from '../actions/products';
import Button from '../components/Button';

class ProductDetail extends Component {
    componentDidMount() {
        this.props.selectProduct(this.props.match.params.id)
    }

    render() {
        return(
            <div>
                <Button onClick={() => this.props.history.push('/')}>Voltar</Button>
                <div>Nome: {this.props.product.name}</div>
                <div>Descrição: {this.props.product.description}</div>
                <div>Preço: {this.props.product.price}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.products.activeProduct
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectProduct: selectProduct }, dispatch);
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductDetail);