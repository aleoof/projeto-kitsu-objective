import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Pagination } from '../models/pagination';
import { debounceTime, map, filter, retry } from 'rxjs/operators';
import { pipe, fromEvent, Subscription } from 'rxjs'
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, AfterViewInit, OnDestroy {
  characters: Pagination;
  pageNumber: number
  pageAlterNumber: number = 1
  searchSub: Subscription
  modal: boolean
  characterDetail: Character
  innerWidth: number;

  @ViewChild('searchChar', { static: false }) searchChar?: ElementRef;
  constructor(private caractersService: CharactersService) { }



  ngOnInit(): void {
    this.pageNumber = 1
    this.caractersService.getCharacters().toPromise().then(response => {
      this.characters = response
    })
    this.innerWidth = window.innerWidth;
  }
  ngOnDestroy() {
    if (this.searchSub) {
      this.searchSub.unsubscribe()
    }
  }

  ngAfterViewInit() {
    this.searchSub = fromEvent(this.searchChar.nativeElement, 'keyup').pipe(
      map((event: KeyboardEvent) => {
        return event.target['value']
      }),
      debounceTime(1000)
    ).subscribe(name => {
      this.search(name)
    })
  }

  nextPage() {
    this.characters.data = null
    this.caractersService.pagination(this.characters.links.next).toPromise().then(response => {
      this.characters = response;
    })
    this.pageNumber++
  }

  previewPage() {
    this.characters.data = null
    this.caractersService.pagination(this.characters.links.prev).toPromise().then(response => {
      this.characters = response
    })
    if (this.pageNumber >= 1) {
      this.pageNumber--
    }
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

  async search(name) {
    this.characters = await this.caractersService.search(name).toPromise()

  }

  openDetail(character: Character) {
    this.modal = true
    this.characterDetail = character
  }
  closeModal(e) {
    this.modal = e
  }

  async getSelectePage(pageNum: number) {
    this.pageNumber = pageNum
    this.characters.data = null
    this.characters = await this.caractersService.getPage(pageNum * 10).toPromise();
  }
}
