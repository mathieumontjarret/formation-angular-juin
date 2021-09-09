import { StateClient } from "../enums/state-client";

export interface ClientI {
  "name": string;
  "totalCaHt": number;
  "tva": number;
  "state": StateClient;
  "comment": string;
  "id": number;
}
