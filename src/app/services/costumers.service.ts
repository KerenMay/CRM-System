import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Costumer } from '../interfaces/Costumer';

@Injectable({
  providedIn: 'root',
})
export class CostumersService {
  costumerReference = collection(this.firestore, 'costumers');
  constructor(private firestore: Firestore) {}

  //add new costumer
  addCostumer(costumer: Costumer): Promise<any> {
    return addDoc(this.costumerReference, costumer) as Promise<any>;
  }

  //get all costumers from db
  getCostumers(): Observable<Costumer[]> {
    return collectionData(this.costumerReference, {
      idField: 'id',
    }) as Observable<Costumer[]>;
  }

  //update specific costumer
  updateCostumer(theCostumer: Costumer): Promise<any> {
    let costumerRef = doc(this.firestore, `costumers/${theCostumer.id}`);
    return setDoc(costumerRef, theCostumer) as Promise<any>;
  }

  //delete specific costumer
  deleteCostumer(costumer: Costumer): Promise<void> {
    let costumerRef = doc(this.firestore, `costumers/${costumer.id}`);
    return deleteDoc(costumerRef) as Promise<void>;
  }

  //get specific costumer
  getCostumerById(id: string): Observable<Costumer> {
    let costumerRef = doc(this.firestore, `costumers/${id}`);
    return docData(costumerRef, { idField: 'id' }) as Observable<Costumer>;
  }
}
