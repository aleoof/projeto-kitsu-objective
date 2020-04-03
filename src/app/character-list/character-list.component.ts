import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Pagination } from '../models/pagination';
import { debounceTime, map, filter, retry } from 'rxjs/operators';
import { pipe, fromEvent } from 'rxjs'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, AfterViewInit {
  characters: Pagination;
  pageNumber: number = 1
  pageAlterNumber: number = 1

  constructor(private caractersService: CharactersService) { }

  @Input() searchCaracter: string;
  @ViewChild('searchCharacter') searchCharacter: ElementRef;


  async ngOnInit(): Promise<void> {
    this.characters = await this.caractersService.getCharacters().toPromise()

    console.log(this.characters);

  }

  ngAfterViewInit() {
    // this.search();
  }

  async nextPage() {
    this.characters = await this.caractersService.pagination(this.characters.links.next).toPromise()
    this.pageNumber++
    console.log(this.pageNumber)
    console.log(this.characters);
  }

  async previewPage() {
    this.characters = await this.caractersService.pagination(this.characters.links.prev).toPromise()
    if (this.pageNumber >= 1) {
      this.pageNumber--
    }
    console.log(this.characters);
  }

  async firstPage() {
    this.characters = await this.caractersService.pagination(this.characters.links.first).toPromise()
  }
  async lastPage() {
    this.characters = await this.caractersService.pagination(this.characters.links.last).toPromise()
  }

  switchPageNumber(page: number) {
    if (this.pageNumber > 3) {
      page = page + 1
    }
    if (this.pageNumber > 4)
      page = page + 2
    if (this.pageNumber > 5) {
      this.pageAlterNumber++
      page = this.pageNumber + 1
    }
    return page
  }

  async search(e?) {
    fromEvent(this.searchCharacter.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value
      }),
      debounceTime(1000)
    ).subscribe(async name => {
      if (name) {
        this.characters = await this.caractersService.search(name).toPromise()
      } else {
        this.characters = await this.caractersService.getCharacters().toPromise()
      }
    })
  }

}
