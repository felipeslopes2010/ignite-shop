import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import { useRouter } from "next/router"

export default function Product() {
    const { query } = useRouter();

    return (
        <ProductContainer>
            <ImageContainer>
                
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quia, nostrum similique consequuntur voluptas dolorem, quae perspiciatis ullam aliquid numquam fugiat. Ipsam, quia temporibus porro voluptatibus nesciunt error incidunt excepturi!</p>
                
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}