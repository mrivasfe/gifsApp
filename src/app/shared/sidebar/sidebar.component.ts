import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit{
  
  constructor(private GifsService:GifsService){}

  get historial(){
    return this.GifsService.historial;
  }

  ngOnInit(): void {
  }
  buscar( termino: string){
    this.GifsService.buscarGifs(termino);
  }
}
