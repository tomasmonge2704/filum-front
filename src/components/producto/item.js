import { Grid,Card,Row,Text,Col,Button } from "@nextui-org/react"
import Router from "next/router";
import { isMobile } from "react-device-detect";
export default function ItemProductCard({item,index}){
    const handleClick = (id) => {
        Router.push('/producto/' + id)
      };
return (
    <Grid xs={6} sm={3} key={index}>
          <Card isPressable variant={isMobile ? "bordered" : "shadow"} css={{height:250}} onPress={() => handleClick(item._id)}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://nextui.org" + item.imageURL}
                objectFit="cover"
                width="100%"
                height={250}
                alt={item.nombre}
              />
            </Card.Body>
            <Card.Footer
      css={{ justifyItems: "flex-start" }}
    >
      <Row wrap="wrap" justify="space-between" align="center">
        
          <Text b>
            {item.nombre}
          </Text>
          <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
            $ {item.precio}
          </Text>

      </Row>
    </Card.Footer>
          </Card>
        </Grid>
)
}