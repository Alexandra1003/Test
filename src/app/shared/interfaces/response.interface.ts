import { IHit } from './hit.interface';

export interface IResponse {
  exhaustiveNbHits: boolean;
  hits: IHit[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
}
