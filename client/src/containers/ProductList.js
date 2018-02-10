import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectProduct } from '../actions/products';
import List from '../components/List';
import ListItem from '../components/ListItem';


class ProductList extends Component {
    renderList() {
        return this.props.products.data.map((data) => {
            return (
                <ListItem 
                    key={data.id}
                    onClick={() => this.props.history.push(`/product/${data.id}`)}
                >
                    {data.name}
                </ListItem>
            )
        })
    }
    render() {
        return (
            <div>
                <List>
                    {this.renderList()}
                </List>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products: state.products
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectProduct: selectProduct }, dispatch);
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductList);