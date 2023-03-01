export interface TrainStation {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  managerId: number | undefined;
}
