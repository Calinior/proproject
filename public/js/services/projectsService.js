app.service('projectsService', ['drawingsService', 'subcontractorsService', 'defectsService', function (drawingsService, subcontractorsService, defectsService) {
        var self = this;
        self.projects = [{
                id: 1001,
                name: 'Project 1'
            }, {
                id: 1002,
                name: 'Project 2'
            }, {
                id: 1003,
                name: 'Project 3'
            }, {
                id: 1004,
                name: 'Project 4'
            }, {
                id: 1005,
                name: 'Project 5'
            }, {
                id: 1006,
                name: 'Project 6'
            }, {
                id: 1007,
                name: 'Project 7'
            }, {
                id: 1008,
                name: 'Project 8'
            }, {
                id: 1009,
                name: 'Project 9'
            }, {
                id: 1010,
                name: 'Project 10'
            }, {
                id: 1011,
                name: 'Project 11'
            }, {
                id: 1012,
                name: 'Project 12'
            }, {
                id: 1013,
                name: 'Project 13'
            }, {
                id: 1014,
                name: 'Project 14'
            }, {
                id: 1015,
                name: 'Project 15'
            }, {
                id: 1016,
                name: 'Project 16'
            }, {
                id: 1017,
                name: 'Project 17'
            }, {
                id: 1018,
                name: 'Project 18'
            }, {
                id: 1019,
                name: 'Project 19'
            }, {
                id: 1020,
                name: 'Project 20'
            }];
        /**
         * @ngdoc method
         * @name getProjects
         * @methodOf app.services:projectsService
         *
         * @description
         * Method to get all projects
         * @returns {Array} list of projects
         */
        self.getProjects = function () {
            return self.projects;
        };
        /**
         * @ngdoc method
         * @name getProjectsNr
         * @methodOf app.services:projectsService
         *
         * @description
         * Method to get the projects number 
         * @returns {Integer} number of projects
         */
        self.getProjectsNr = function () {
            return self.projects.length;
        };
        /**
         * @ngdoc method
         * @name getProjectById
         * @methodOf app.services:projectsService
         *
         * @description
         * Method to get a project by ID
         * @param {Integer} projectID - ID of the project
         * @param {Boolean} getIndex - if true, returns the index of the project
         * @returns if getIndex is true then returns the index of the project, else returns the project 
         */
        self.getProjectById = function (projectID, getIndex) {
            if (!projectID || isNaN(projectID)) {
                return null;
            }
            
            var project = {};
            console.log('Apelat de ... ori');
            for (var i = 0; i < self.projects.length; i++) {
                if (self.projects[i].id === projectID) {
                    project = self.projects[i];
                    if (getIndex)
                        return i;
                    break;
                }
            }
            
            return project;
        };       
        /**
         * @ngdoc method
         * @name getMaxID
         * @methodOf app.services:projectsService
         *
         * @description
         * Method to get the maximum projectID
         * @returns {Integer} maximum projectID
         */
        self.getMaxID = function () {
            return Math.max.apply(Math, self.projects.map(function(d){return d.id;})); 
        };
        /**
         * @ngdoc method
         * @name addProject
         * @methodOf app.services:projectsService
         *
         * @description
         * Method to insert a project into projects array
         * @param {Object} project - project which will be inserted in the projects array
         * @param {Boolean} callback - returns the new length of the array
         */
        self.addProject = function (project, callback) {
            project.id = self.getMaxID() + 1;
            self.projects.push(project);
            if (callback) {
                callback(self.projects.length);
            }
        };
    }]);