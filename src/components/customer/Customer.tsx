import axios from "axios";
import React, { useEffect, useState } from "react";

export function Customer({ customerId }: any) {
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initFetch = async () => {
    const customerData = await axios.get(
      `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
    );

    setName(`${customerData.data[0].name} ${customerData.data[0].lastname}`);

    setIsLoading(false);
  };
  useEffect(() => {
    initFetch();
  }, []);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      <p>name: {name}</p>
    </>
  );
}
