System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MatchService;
    return {
        setters:[],
        execute: function() {
            MatchService = (function () {
                function MatchService() {
                }
                MatchService.prototype.getMatches = function () {
                    return ["Arsenal vs Bayern Munich", "Barcelona vs Real Madrid", "Juventus vs Manchester City"];
                };
                return MatchService;
            }());
            exports_1("MatchService", MatchService);
        }
    }
});
//# sourceMappingURL=matches.service.js.map