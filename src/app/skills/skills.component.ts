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
      {name:"nodejs-original-wordmark.svg", alt :"NodeJS"},
      {name:"javascript-original.svg" , alt :"JavaScript"},
      {name:"mongodb-original.svg" , alt :"MongoDB"},
      {name:"angular-original.svg" , alt :"Angular"},
      {name:"java-original-wordmark.svg" , alt :"Java"},
      {name:"spring-original-wordmark.svg" , alt :"Spring"},
      {name:"python-original.svg" , alt :"Python"},
      {name:"c-original.svg" , alt :"C"},
      {name:"php-original.svg" , alt :"PHP"},
      {name:"html5-original.svg" , alt :"HTML5"},
      {name:"css3-plain-wordmark.svg" , alt :"CSS3"},
    ],

    tools:[
      {name:"vscode-original.svg" , alt :"VS Code"},
      {name:"postman-original.svg"  , alt :"Postman"},
      {name:"docker-original.svg" , alt :"Docker"},
      {name :"nginx-original.svg" , alt :"Nginx"},
      {name:"git-original-wordmark.svg" , alt :"Git"},
      {name:"github-original-wordmark.svg"  , alt :"GitHub"},
      {name:"linux-original.svg"  , alt :"Linux"},
    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




