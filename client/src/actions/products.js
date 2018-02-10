export function selectProduct(id) {
    return {
        type: 'PRODUCT_SELECTED',
        payload: id
    }
}