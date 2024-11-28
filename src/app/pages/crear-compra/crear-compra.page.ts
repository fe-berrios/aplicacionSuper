import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ComprasService } from 'src/app/services/compras.service';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.page.html',
  styleUrls: ['./crear-compra.page.scss'],
})
export class CrearCompraPage implements OnInit {
  compraForm = new FormGroup({
    id: new FormControl(Date.now().toString(), [Validators.required]),
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$") // Solo letras
    ]),
    fecha: new FormControl(new Date().toISOString(), [Validators.required]),
    items: new FormArray([]), // FormArray para los ítems
  });

  constructor(private comprasService: ComprasService) {}

  ngOnInit() {}

  // Obtener el FormArray de ítems
  get items() {
    return this.compraForm.get('items') as FormArray;
  }

  // Agregar un nuevo ítem al FormArray
  addItem() {
    const itemGroup = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$") // Solo letras
      ]),
      cantidad: new FormControl(1, [
        Validators.required,
        Validators.min(1)
      ]),
      precio: new FormControl(0, [
        Validators.required,
        Validators.min(0)
      ]),
    });
    this.items.push(itemGroup);
  }

  // Eliminar un ítem del FormArray
  removeItem(index: number) {
    this.items.removeAt(index);
  }

  // Guardar la compra en el servicio
  async saveCompra() {
    if (this.compraForm.valid) {
      const compra = this.compraForm.value;
  
      // Garantizar que fecha tenga un valor por defecto si es null o undefined
      compra.fecha = new Date(compra.fecha ?? new Date()).toISOString();
  
      const success = await this.comprasService.createCompra(compra);
      if (success) {
        console.log('Compra guardada con éxito');
      } else {
        console.log('Error al guardar la compra');
      }
    }
  }
}
