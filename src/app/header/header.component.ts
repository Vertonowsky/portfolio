import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Language} from "../language/language.enum";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Header} from "./header.model";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    TranslateModule,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() selectedLanguage!: Language;
  @Input() isHeaderBarActive!: boolean;
  @Input() isHeaderOpened!: boolean;
  @Output() languageChange = new EventEmitter<Language>();

  languages : string[] = Object.values(Language);
  showOptions : boolean = false;
  model?: Header;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.toggleHeaderClass();

    this.translate.stream('header').subscribe((data: Header) => {
      this.model = data;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleHeaderClass();
  }

  private toggleHeaderClass() {
    if (this.isHeaderOpened)
      return;

    this.isHeaderBarActive = document.body.scrollTop > 40 || document.documentElement.scrollTop > 40;
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  toggleMenu() {
    this.isHeaderOpened = !this.isHeaderOpened;

    if (!this.isHeaderBarActive && this.isHeaderOpened)
      this.isHeaderBarActive = true;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-select'))
      this.showOptions = false;

    if (!target.closest('#min-header') && !target.closest('#header') && this.isHeaderOpened)
      this.isHeaderOpened = false;
  }

  changeLanguage(event: Event, lang: string) {
    event.stopPropagation();
    this.showOptions = false;
    this.languageChange.emit(Object.values(Language).find(l => l === lang) as Language | undefined);
  }

}
