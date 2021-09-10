import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./barStyle";
  
const Bar = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Product Management</Heading>
            <FooterLink href="/create-promotion">Add Products</FooterLink>
           <FooterLink href="/list-promotion">List Products</FooterLink>
          </Column>
          <Column>
            <Heading>Promotion Management</Heading>
            <FooterLink href="/create-promotion">Add Promotions</FooterLink>
           <FooterLink href="/list-promotion">List Promotions</FooterLink>
          </Column>
          <Column>
            <Heading>Delivery Management</Heading>
           <FooterLink href="#">Add Delivery Details</FooterLink>
            <FooterLink href="#">List Delivery Details</FooterLink>
          </Column>
          <Column>
            <Heading>FeedBack Management</Heading>
            <FooterLink href="#">Add Feedback</FooterLink>
           <FooterLink href="#">List FeedBack</FooterLink>
          </Column>
           
      
        </Row>
      </Container>
    </Box>
  );
};
export default Bar;