import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes';
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  notificationCount: number = 5; // Aquí defines la propiedad notificationCount con su valor inicial

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }
  selectedOption: string = 'option1'; // Opción predeterminada seleccionada
  onToggleChange(event: MatButtonToggleChange) {
    const selectedValue = event.value;
    // Aquí puedes manejar la selección realizada por el usuario
    console.log('Seleccionado:', selectedValue);
  }

  listItems = [
    {
      name: 'Elemento 1',
      checked: false, // Agregar la propiedad 'checked' y establecerla como false
      subItems: [
        { name: 'Sub Elemento 1.1', checked: false },
        { name: 'Sub Elemento 1.2', checked: false },
      ]
    },
    {
      name: 'Elemento 2',
      checked: false, // Agregar la propiedad 'checked' y establecerla como false
      subItems: [
        { name: 'Sub Elemento 2.1', checked: false },
        { name: 'Sub Elemento 2.2', checked: false },
      ]
    },
    // Agregar más elementos y sub-checkboxes según sea necesario
  ];
  removeChip() {
    console.log('Chip removed!');
    // Aquí puedes agregar la lógica para eliminar el chip de tu lista
  }
}
