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
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row justify="space-around">
        
          <Text color="#000" size={20}>
            {item.nombre}
          </Text>
          <Text color="$primary" size={20}>
            $ {item.precio}
          </Text>

      </Row>
    </Card.Footer>
          </Card>
        </Grid>
)
}