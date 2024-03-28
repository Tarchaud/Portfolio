import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[
      {name:"nodejs-original-wordmark.svg"},
      {name:"javascript-original.svg" },
      {name:"mongodb-original.svg"},
      {name:"angular-original.svg"},
      {name:"java-original-wordmark.svg"},
      {name:"spring-original-wordmark.svg"},
      {name:"python-original.svg"},
      {name:"c-original.svg"},
      {name:"php-original.svg"},
      {name:"html5-original.svg"},
      {name:"css3-plain-wordmark.svg"},
    ],

    tools:[
      {name:"vscode-original.svg"},
      {name:"postman-original.svg"},
      {name:"docker-original.svg"},
      {name :"nginx-original.svg"},
      {name:"git-original-wordmark.svg"},
      {name:"github-original-wordmark.svg"},
      {name:"linux-original.svg"},
    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




