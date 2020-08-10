// Creating an interface of customer that tell what the customer object should contain in the fields
export interface Customer {
  id?: string | number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  isActive: boolean;
  registered: Date;
}
