System.register(['angular2/core', './matches.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, matches_service_1;
    var MatchesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (matches_service_1_1) {
                matches_service_1 = matches_service_1_1;
            }],
        execute: function() {
            MatchesComponent = (function () {
                function MatchesComponent(matchService) {
                    this.MatchTitle = "Champions League Matches";
                    this.matches = matchService.getMatches();
                }
                MatchesComponent = __decorate([
                    core_1.Component({
                        selector: 'matches',
                        template: "\n        <h2>{{ MatchTitle }}</h2>\n        <ul>\n          <li *ngFor=\"#match of matches\">\n            {{match}}\n          </li>\n        </ul>\n        ",
                        providers: [matches_service_1.MatchService]
                    }), 
                    __metadata('design:paramtypes', [matches_service_1.MatchService])
                ], MatchesComponent);
                return MatchesComponent;
            }());
            exports_1("MatchesComponent", MatchesComponent);
        }
    }
});
//# sourceMappingURL=matches.component.js.map