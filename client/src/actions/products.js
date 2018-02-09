export function selectProduct(item) {
    return {
        type: 'PRODUCT_SELECTED',
        payload: item
    }
}