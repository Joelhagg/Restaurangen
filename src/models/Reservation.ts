export class Reservation {
  
  restaurantId: string;

  constructor(
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customer: {
      name: string;
      lastname: string;
      email: string;
      phone: string;
    }
  ) 
  {
    this.restaurantId = "624edd698da20f7ae72e1559";
  };
}
