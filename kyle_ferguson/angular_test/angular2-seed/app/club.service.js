System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ClubService;
    return {
        setters:[],
        execute: function() {
            ClubService = (function () {
                function ClubService() {
                }
                ClubService.prototype.getClubs = function () {
                    return ["Arsenal", "Bayern Munich", "Barcelona", "Real Madrid", "Juventus", "Manchester City"];
                };
                return ClubService;
            }());
            exports_1("ClubService", ClubService);
        }
    }
});
//# sourceMappingURL=club.service.js.map