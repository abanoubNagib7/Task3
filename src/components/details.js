import React, { useContext, useEffect } from "react";
import { View, Text, Button, VStack, Center, Image } from "native-base";
import { context } from "../context/context";
import { addUser, getpostDetails } from "../actions";

const Details = (props) => {
  console.log(props);
  const { state, dispatch } = useContext(context);
  useEffect(() => {
    const handleActionPromise = async () => {
      dispatch(await getpostDetails(props.route.params.id));
    };
    handleActionPromise();
  }, []);
  console.log(props.route.params.id, state.posts.title);
  if (state.posts.details && state.posts.details.id)
    return (
      <VStack>
        <Center>
          <Text
            fontSize={17}
            color="yellow"
            borderBottomColor="skyblue"
            borderBottomWidth={3}
          >
            Details of {state.posts.details.title}
          </Text>
        </Center>
        <Text>Body: {state.posts.details.body}</Text>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{ borderRadius: 40, width: 250, height: 250 }}
        />
      </VStack>
    );
  return <Text>No Found Any Details</Text>;
};
export default Details;
