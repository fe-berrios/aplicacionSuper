import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private storage: Storage) {
    this.initStorage();
   }

  // Inicializar Storage
  initStorage(){
    this.storage.create();
  }

  // CRUD
  async createCompra(compra: any): Promise<boolean>{
    let compras: any[] = await this.storage.get("compras") || [];
    if (compras.find(com => com.id == compra.id) != undefined){
      console.log("ERROR! Compra ya existe!");
      return false;
    }
    compras.push(compra);
    await this.storage.set("compras", compras);
    console.log("Compra registrada!")
    return true;
  }

  async getCompra(id: string){
    let compras: any[] = await this.storage.get("compras") || [];
    return compras.find(com => com.id == id);
  }

  async getCompras(){
    let compras: any[] = await this.storage.get("compras") || [];
    return compras;
  }

  async updateCompra(id: string, nuevaCompra: any): Promise<boolean>{
    let compras: any[] = await this.storage.get("compras") || [];
    let index = compras.findIndex(com => com.id == id);
    if (index == -1){
      console.log("ERROR! la compra no existe.");
      return false;
    }
    compras.push(index, 1);
    await this.storage.set("compras", compras);
    console.log("Compra actualizada!")
    return true;
  }

  async deleteCompra(id: string): Promise<boolean>{
    let compras: any[] = await this.storage.get("compras") || [];
    let index = compras.findIndex(com => com.id == id);
    if (index == -1){
      console.log("ERROR! la compra no existe");
      return false
    }
    compras.splice(index, 1);
    await this.storage.set("compras", compras);
    console.log("Compra eliminada.");
    return true;
  }
}