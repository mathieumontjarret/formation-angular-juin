import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  name!: string;
  totalCaHt!: number;
  tva = 20;
  state = StateClient.ACTIVE;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;
  constructor(obj?: Partial<Client>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}
