import axios from "axios";
import React, { useEffect, useState } from "react";

export function Customer({ customerId }: any) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initFetch = async () => {
    const customerData = await axios.get(
      `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
    );

    setName(`${customerData.data[0].name} ${customerData.data[0].lastname}`);
    setEmail(`${customerData.data[0].email}`);
    setPhoneNumber(`${customerData.data[0].phone}`);

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
      <p>Namn: {name}</p>
      <p>Mejl: {email}</p>
      <p>Telefonnummer: {phoneNumber}</p>
    </>
  );
}
