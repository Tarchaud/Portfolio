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
      {name:"NodeJS, ExpressJS"},
      {name:"JavaScript, Typescript" },
      {name:"MySql, MongoDB"},
      {name:"Angular"},
      {name:"Java, J2EE, Spring"},
      {name:"Python, C"},
      {name:"PHP, HTML, CSS"},
    ],

    tools:[
      {name:"Git, Github"},
      {name:"Docker"},
      {name:"Linux"},
    ],
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




