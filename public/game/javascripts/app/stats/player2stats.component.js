"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var Player2StatsComponent = (function () {
    function Player2StatsComponent(af) {
        this.URL = window.location.href;
        this.playerClass = "Highwayman";
        this.champion = af.database.object('/' + this.URL.split('/game/')[1] + '/Players/player2');
        this.environment = af.database.object('/' + this.URL.split('/game/')[1] + '/Globals/OnOff');
    }
    Player2StatsComponent = __decorate([
        core_1.Component({
            selector: 'player2stats',
            template: "\n  <div *ngIf=\"champion\" class=\"player2 stat-container pull-right\">\n    <div class=\"row\">\n      <div class=\"col-xs-4 col-sm-4\">\n        <img *ngIf=\"(champion | async)?.playerClass == 'Highwayman'\" class=\"thumbnail champion-icon\" src=\"./images/champion_highwayman.png\" />\n        <img *ngIf=\"(champion | async)?.playerClass == 'Paragon'\" class=\"thumbnail champion-icon\" src=\"./images/champion_paragon.png\" />\n        <img *ngIf=\"(champion | async)?.playerClass == 'Elementalist'\" class=\"thumbnail champion-icon\" src=\"./images/champion_elementalist.png\" />\n      </div>\n      <div class=\"col-xs-8 col-sm-8\">\n        <h6>{{(champion | async)?.playerClass}}</h6>\n        <h4 class=\"playerName\">{{(champion | async)?.playerName}}</h4>\n      </div>\n    </div>\n    <div class=\"row container\">\n      <h4>HP: <span class=\"action\">{{(champion | async)?.currentHitpoints}}</span></h4>\n      <p>Physical Attack: <span class=\"action\">{{(champion | async)?.physicalAttack}}</span></p>\n      <p>Physical Defense: <span class=\"action\">{{(champion | async)?.physicalDefense}}</span></p>\n      <p>Special Attack: <span class=\"action\">{{(champion | async)?.specialAttack}}</span></p>\n      <p>Special Defense: <span class=\"action\">{{(champion | async)?.specialDefense}}</span></p>\n      <p>Dexterity: <span class=\"action\">{{(champion | async)?.dexterity}}</span></p>\n      <p>Action: <span class=\"action\">{{(champion | async)?.action}}</span></p>\n    </div>\n  </div>\n  ",
            styles: ["\n    .action {\n      color: #29B0AE;\n      text-transform: uppercase;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], Player2StatsComponent);
    return Player2StatsComponent;
}());
exports.Player2StatsComponent = Player2StatsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzL3BsYXllcjJzdGF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw2QkFBbUQsY0FBYyxDQUFDLENBQUE7QUFvQ2xFO0lBTUUsK0JBQVksRUFBYztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUMsWUFBWSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUN6RixDQUFDO0lBN0NIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBQyxpL0NBdUJSO1lBQ0QsTUFBTSxFQUFDLENBQUMscUZBS1AsQ0FBQztTQUNILENBQUM7OzZCQUFBO0lBY0YsNEJBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDZCQUFxQix3QkFZakMsQ0FBQSIsImZpbGUiOiJzdGF0cy9wbGF5ZXIyc3RhdHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FuZ3VsYXJGaXJlLEZpcmViYXNlT2JqZWN0T2JzZXJ2YWJsZX0gZnJvbSAnYW5ndWxhcmZpcmUyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGxheWVyMnN0YXRzJyxcclxuICB0ZW1wbGF0ZTpgXHJcbiAgPGRpdiAqbmdJZj1cImNoYW1waW9uXCIgY2xhc3M9XCJwbGF5ZXIyIHN0YXQtY29udGFpbmVyIHB1bGwtcmlnaHRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00IGNvbC1zbS00XCI+XHJcbiAgICAgICAgPGltZyAqbmdJZj1cIihjaGFtcGlvbiB8IGFzeW5jKT8ucGxheWVyQ2xhc3MgPT0gJ0hpZ2h3YXltYW4nXCIgY2xhc3M9XCJ0aHVtYm5haWwgY2hhbXBpb24taWNvblwiIHNyYz1cIi4vaW1hZ2VzL2NoYW1waW9uX2hpZ2h3YXltYW4ucG5nXCIgLz5cclxuICAgICAgICA8aW1nICpuZ0lmPVwiKGNoYW1waW9uIHwgYXN5bmMpPy5wbGF5ZXJDbGFzcyA9PSAnUGFyYWdvbidcIiBjbGFzcz1cInRodW1ibmFpbCBjaGFtcGlvbi1pY29uXCIgc3JjPVwiLi9pbWFnZXMvY2hhbXBpb25fcGFyYWdvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxpbWcgKm5nSWY9XCIoY2hhbXBpb24gfCBhc3luYyk/LnBsYXllckNsYXNzID09ICdFbGVtZW50YWxpc3QnXCIgY2xhc3M9XCJ0aHVtYm5haWwgY2hhbXBpb24taWNvblwiIHNyYz1cIi4vaW1hZ2VzL2NoYW1waW9uX2VsZW1lbnRhbGlzdC5wbmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy04IGNvbC1zbS04XCI+XHJcbiAgICAgICAgPGg2Pnt7KGNoYW1waW9uIHwgYXN5bmMpPy5wbGF5ZXJDbGFzc319PC9oNj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJwbGF5ZXJOYW1lXCI+e3soY2hhbXBpb24gfCBhc3luYyk/LnBsYXllck5hbWV9fTwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGNvbnRhaW5lclwiPlxyXG4gICAgICA8aDQ+SFA6IDxzcGFuIGNsYXNzPVwiYWN0aW9uXCI+e3soY2hhbXBpb24gfCBhc3luYyk/LmN1cnJlbnRIaXRwb2ludHN9fTwvc3Bhbj48L2g0PlxyXG4gICAgICA8cD5QaHlzaWNhbCBBdHRhY2s6IDxzcGFuIGNsYXNzPVwiYWN0aW9uXCI+e3soY2hhbXBpb24gfCBhc3luYyk/LnBoeXNpY2FsQXR0YWNrfX08L3NwYW4+PC9wPlxyXG4gICAgICA8cD5QaHlzaWNhbCBEZWZlbnNlOiA8c3BhbiBjbGFzcz1cImFjdGlvblwiPnt7KGNoYW1waW9uIHwgYXN5bmMpPy5waHlzaWNhbERlZmVuc2V9fTwvc3Bhbj48L3A+XHJcbiAgICAgIDxwPlNwZWNpYWwgQXR0YWNrOiA8c3BhbiBjbGFzcz1cImFjdGlvblwiPnt7KGNoYW1waW9uIHwgYXN5bmMpPy5zcGVjaWFsQXR0YWNrfX08L3NwYW4+PC9wPlxyXG4gICAgICA8cD5TcGVjaWFsIERlZmVuc2U6IDxzcGFuIGNsYXNzPVwiYWN0aW9uXCI+e3soY2hhbXBpb24gfCBhc3luYyk/LnNwZWNpYWxEZWZlbnNlfX08L3NwYW4+PC9wPlxyXG4gICAgICA8cD5EZXh0ZXJpdHk6IDxzcGFuIGNsYXNzPVwiYWN0aW9uXCI+e3soY2hhbXBpb24gfCBhc3luYyk/LmRleHRlcml0eX19PC9zcGFuPjwvcD5cclxuICAgICAgPHA+QWN0aW9uOiA8c3BhbiBjbGFzcz1cImFjdGlvblwiPnt7KGNoYW1waW9uIHwgYXN5bmMpPy5hY3Rpb259fTwvc3Bhbj48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczpbYFxyXG4gICAgLmFjdGlvbiB7XHJcbiAgICAgIGNvbG9yOiAjMjlCMEFFO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyMlN0YXRzQ29tcG9uZW50e1xyXG4gIGNoYW1waW9uOiBGaXJlYmFzZU9iamVjdE9ic2VydmFibGU8YW55PjtcclxuICBlbnZpcm9ubWVudDogRmlyZWJhc2VPYmplY3RPYnNlcnZhYmxlPGFueT47XHJcbiAgcGxheWVyQ2xhc3M6IHN0cmluZztcclxuICBVUkw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoYWY6QW5ndWxhckZpcmUpe1xyXG4gICAgdGhpcy5VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIHRoaXMucGxheWVyQ2xhc3M9XCJIaWdod2F5bWFuXCI7XHJcbiAgICB0aGlzLmNoYW1waW9uID0gYWYuZGF0YWJhc2Uub2JqZWN0KCcvJyt0aGlzLlVSTC5zcGxpdCgnL2dhbWUvJylbMV0rJy9QbGF5ZXJzL3BsYXllcjInKTtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBhZi5kYXRhYmFzZS5vYmplY3QoJy8nK3RoaXMuVVJMLnNwbGl0KCcvZ2FtZS8nKVsxXSsnL0dsb2JhbHMvT25PZmYnKVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
