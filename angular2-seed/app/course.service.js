System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            class CourseService {
                getCourses() {
                    return ['Angular2', 'ReactJS', 'Hadoop'];
                }
            }
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map