
export const createDynamicContent = (product: any) => {
    return {
        id: product.id,
        type: "product_image",
        hovered: false,
        options: {
            image: product.image_url,
        }
    }
}

