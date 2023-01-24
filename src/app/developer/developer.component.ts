import { Component } from '@angular/core';
import { Skill } from "../model/skill.model";
import { Developer } from "../model/developer.model";

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
robertUser : Developer = new Developer("Robert","Maçon", 32, "Male", "ancien routier", [
new Skill("Angular","logo Angular","Angular.io"),
new Skill("Java","logo Java","Java.io"),
]);
}
