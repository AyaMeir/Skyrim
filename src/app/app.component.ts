import { Component } from '@angular/core';

export class Skyrim {

	id: number;
	name: string;
}
@Component({
  selector: 'app-root',

  template: `
  <h1>{{title}}</h1>
  <h2>{{skyrim.name}} details!</h2>
    <div><label>id: </label>{{skyrim.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngmodel)]="skyrim.name" placeholder="name">
  </div>
  `
})

export class AppCpmponent {

  title = 'The Dragon Born';
  skyrim: Skyrim = {
  	id: 1,
  	name: 'The Elder Scroll'
};