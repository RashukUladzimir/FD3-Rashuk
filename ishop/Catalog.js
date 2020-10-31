var Catalog = React.createClass({
    displayName: 'IShop',
    getDefaultProps: function () {
        return {
            ShopName: 'Shop undefined',
            products: []
        }        
    },

    render: function () {
        var products = []
        this.props.products.forEach(function(product,) {
            object = React.DOM.div({key:product.id, className:'Row'},
              React.DOM.div({className:'Cell ID'}, product.id),
              React.DOM.div({className:'Cell Name'}, product.item),
              React.DOM.div({className:'Cell Price'}, product.price),
              React.DOM.div({className:'Cell Amount'}, product.quantity),
              React.DOM.div({className:'Cell Photo'}, product.photo)
        )
        products.push(object)
    },
        
    );

     return React.DOM.div({className:'Catalog'}, 
        React.DOM.div({className:'Name'}, this.props.shopName),
        React.DOM.div({className:'Table'}, 
                React.DOM.div({className:'Header'},
          React.DOM.div({className:'Cell ID'},'ID'),
          React.DOM.div({className:'Cell Product'},'Product'),
          React.DOM.div({className:'Cell Price'},'Price'),
          React.DOM.div({className:'Cell Quantity'},'Quantity'),
          React.DOM.div({className:'Cell Photo'},'Photo'),
            ), products)
        )
    },
})