import { Dropdown } from "./dropdown.model";

export interface ClientModel {
  id: number;
  name: string;
  email: string;
  age: string;
  gender: Dropdown;
  job: string;
}
