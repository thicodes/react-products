export const initialState = {
    products: [
        { 
            id: 1,
            name: 'Pizza', 
            description: 'Pizza é uma preparação culinária que consiste em um disco de massa fermentada de farinha de trigo, coberto com molho de tomate e os ingredientes variados que normalmente incluem algum tipo de queijo', 
            price: 15
        },
        { 
            id: 2,
            name: 'Cafe', 
            description: 'O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado.',
            price: 2
        },
        {
            id: 3,
            name: 'Leite',
            description: 'Leite é uma secreção nutritiva de cor esbranquiçada e opaca produzida pelas glândulas mamárias das fêmeas dos mamíferos. O líquido é produzido pelas células secretoras das glândulas mamárias ou mamas.',
            price: 2
        },
        {
            id: 4,
            name: 'Chocolate',
            description: 'O chocolate é um alimento feito com base na amêndoa fermentada e torrada do cacau. Sua origem remonta às civilizações pré-colombianas da América Central.',
            price: 2
        }
    ],
    activeProducts: {  },
}

export default function (state = initialState, action) {
    switch(action.type) {
        case 'PRODUCT_LIST':
            return state;
        case 'PRODUCT_SELECTED':
            return action.payload;
    }

    return state;
}