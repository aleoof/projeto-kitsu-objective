import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-detail-modal',
  templateUrl: './character-detail-modal.component.html',
  styleUrls: ['./character-detail-modal.component.scss']
})
export class CharacterDetailModalComponent implements OnInit {

  @Input() character: Character;
  @Output() close: EventEmitter<boolean> = new EventEmitter;

constructor() { }

ngOnInit(): void {
}

closeModal() {
  this.close.emit(false);
}

}
