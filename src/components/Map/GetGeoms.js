import React from "react";
import { Button } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import UserLayers from "./UserLayers";

function GetGeoms({ closeFunction, connectionType }) {
  const { user } = useAuth0();

  const getGeometries = async () => {
    closeFunction(); // close drawer after button clicked
    UserLayers();
    // try {
    //   const username = user.nickname;
    //   if (connectionType === "bike") {
    //     var schema = "lts";
    //   } else if (connectionType === "pedestrian") {
    //     var schema = "sidewalk";
    //   }

    //   const response = await fetch(
    //     `http://localhost:8000/get_user_studies?username=${username}&schema=${schema}`,
    //     {
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     },
    //   );
    //   const data = await response.json();

    //   if (data["studies"][0] === "No studies have been created yet!") {
    //     console.log("this is just a placeholder");
    //   } else {
    //     console.log("this is just a placeholder too!");
    //   }
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    // // open();
  };

  return (
    <>
      <Button onClick={getGeometries}>View Study</Button>
    </>
  );
}

export default GetGeoms;