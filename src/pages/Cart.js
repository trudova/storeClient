
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Footer from "../components/Footer" 
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px" })}
`
const Title = styled.h1`
font-weight: 300;
text-align: center;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=> props.type ==="filled" && "none"};
background-color: ${props=> props.type === "filled"?"black" : "white"};
color: ${props=> props.type ==="filled" ?  "white" : "black"};
`
const TopTexts = styled.div`
display: flex;
${mobile({display: "none" })}
`
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
/* align-items: center; */
${mobile({flexDirection: "column" })}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
${mobile({flexDirection: "column" })}
`
const ProductDetail = styled.div`
flex:2;
display: flex;
`
const Image = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`
const ProdutName = styled.span``
const ProdutId = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const PoductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin: " 5px 15px" })}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({marginBottom: "15px" })}
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin: 20px;
`
const Summary = styled.div`
flex: 1;
/* display: flex;
flex-direction: column; */
border: 0.5px solid lightgray ;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
`
const SummaryItemText = styled.div`
font-weight: ${props=> props.type === "total" && "500"};
font-size: ${props=> props.type === "total" && "24px"};
`
const SummaryItemPrice = styled.div``
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`

export default function Cart() {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
         <Wrapper>
             <Title>YOUR BAG</Title>
             <Top>
                 <TopButton>CONTINUE SHOPPING</TopButton>
                 <TopTexts>
                     <TopText>Shopping Bag (2)</TopText>
                     <TopText>Your Wishlist (0)</TopText>
                 </TopTexts>
                 <TopButton type="filled">CHECKOUT NOW</TopButton>
             </Top>
             <Bottom>
                 <Info>
                     <Product>
                         <ProductDetail>
                        <Image src="https://images.pexels.com/photos/6046205/pexels-photo-6046205.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <Details>
                            <ProdutName><b>Product</b>T-shirt</ProdutName>
                            <ProdutId><b>ID: </b>092847725</ProdutId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size: </b>XS</ProductSize>
                        </Details>
                         </ProductDetail>
                         <PriceDetail>
                            <PoductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </PoductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                         </PriceDetail>
                     </Product>
                <Hr/>
                     <Product>
                         <ProductDetail>
                        <Image src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        <Details>
                            <ProdutName><b>Product</b>Shoes</ProdutName>
                            <ProdutId><b>ID: </b>0929647725</ProdutId>
                            <ProductColor color="green"/>
                            <ProductSize><b>Size: </b>37.5</ProductSize>
                        </Details>
                         </ProductDetail>
                         <PriceDetail>
                            <PoductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </PoductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                         </PriceDetail>
                     </Product>

                 </Info>
                 <Summary>
                     <SummaryTitle>Order Summary</SummaryTitle>
                     <SummaryItem>
                         <SummaryItemText>
                             Subtotal: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ 80</SummaryItemPrice>
                     </SummaryItem>

                      <SummaryItem>
                         <SummaryItemText>
                             Shipping: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ 7</SummaryItemPrice>
                     </SummaryItem>

                     <SummaryItem>
                         <SummaryItemText>
                             Shipping Discount: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ - 7</SummaryItemPrice>
                     </SummaryItem>

                     <SummaryItem>
                         <SummaryItemText type="total">
                             Total: 
                         </SummaryItemText>
                         <SummaryItemPrice>$ 80</SummaryItemPrice>
                     </SummaryItem>
                     <Button>CHECKOUT NOW</Button>
                 </Summary>
             </Bottom>
         </Wrapper>
            <Footer/>
        </Container>
    )
}
