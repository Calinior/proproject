app.service('defectsService', function ($filter) {
    var self = this;
    self.defects = [{
            id: 101,
            projectID: 1001,
            taskName: 'Task1',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: null,
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 102,
            projectID: 1002,
            taskName: 'Task2',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'ABCD@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 103,
            projectID: 1003,
            taskName: 'Task3',
            priority: {key: 1, name: 'Low'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'BCDE@mail.com',
            relatedTasks: [1, 5, 6, 7],
            status: null,
            dateAdd: new Date(2016, 5, 26, 9, 30)
        }, {
            id: 104,
            projectID: 1004,
            taskName: 'Task4',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'CDEF@mail.com',
            relatedTasks: [2, 7, 3, 4],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 11, 30)
        }, {
            id: 105,
            projectID: 1005,
            taskName: 'Task5',
            priority: {key: 1, name: 'Low'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'DEF@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: null,
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 106,
            projectID: 1001,
            taskName: 'Task6',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 107,
            projectID: 1002,
            taskName: 'Task7',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'EFG@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 7, 26, 9, 30)
        }, {
            id: 108,
            projectID: 1003,
            taskName: 'Task8',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'FGH@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 5, 26, 9, 30)
        }, {
            id: 109,
            projectID: 1004,
            taskName: 'Task9',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'GHI@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 110,
            projectID: 1005,
            taskName: 'Task10',
            priority: {key: 0, name: 'Very Low'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'HIJ@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 111,
            projectID: 1001,
            taskName: 'Task11',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'IJK@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 112,
            projectID: 1002,
            taskName: 'Task12',
            priority: {key: 1, name: 'Low'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'JKL@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 113,
            projectID: 1003,
            taskName: 'Task13',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'klm@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 114,
            projectID: 1004,
            taskName: 'Task14',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'LMN@mail.com',
            relatedTasks: [2, 7, 3, 4],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 115,
            projectID: 1005,
            taskName: 'Task15',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'MNO@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 116,
            projectID: 1001,
            taskName: 'Task16',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 117,
            projectID: 1002,
            taskName: 'Task17',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 118,
            projectID: 1003,
            taskName: 'Task18',
            priority: {key: 1, name: 'Low'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 119,
            projectID: 1004,
            taskName: 'Task19',
            priority: {key: 1, name: 'Low'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 120,
            projectID: 1005,
            taskName: 'Task20',
            priority: {key: 1, name: 'Low'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 121,
            projectID: 1001,
            taskName: 'Task21',
            priority: {key: 1, name: 'Low'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 122,
            projectID: 1002,
            taskName: 'Task22',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 123,
            projectID: 1003,
            taskName: 'Task23',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 124,
            projectID: 1004,
            taskName: 'Task24',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 125,
            projectID: 1005,
            taskName: 'Task25',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 126,
            projectID: 1001,
            taskName: 'Task26',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 127,
            projectID: 1002,
            taskName: 'Task27',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 128,
            projectID: 1003,
            taskName: 'Task28',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 129,
            projectID: 1004,
            taskName: 'Task29',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 130,
            projectID: 1005,
            taskName: 'Task30',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 131,
            projectID: 1001,
            taskName: 'Task31',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 132,
            projectID: 1002,
            taskName: 'Task32',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 133,
            projectID: 1003,
            taskName: 'Task33',
            priority: {key: 1, name: 'Low'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 134,
            projectID: 1004,
            taskName: 'Task34',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 135,
            projectID: 1005,
            taskName: 'Task35',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 136,
            projectID: 1001,
            taskName: 'Task36',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 137,
            projectID: 1002,
            taskName: 'Task37',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 138,
            projectID: 1003,
            taskName: 'Task38',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 5, 6, 7],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 139,
            projectID: 1004,
            taskName: 'Task39',
            priority: {key: 2, name: 'Medium'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [2, 7, 3, 4],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 140,
            projectID: 1005,
            taskName: 'Task40',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 141,
            projectID: 1001,
            taskName: 'Task41',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 142,
            projectID: 1002,
            taskName: 'Task42',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 143,
            projectID: 1003,
            taskName: 'Task43',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 144,
            projectID: 1004,
            taskName: 'Task44',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 145,
            projectID: 1005,
            taskName: 'Task45',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 146,
            projectID: 1001,
            taskName: 'Task46',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 147,
            projectID: 1002,
            taskName: 'Task47',
            priority: {key: 4, name: 'Very High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 148,
            projectID: 1003,
            taskName: 'Task48',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 149,
            projectID: 1004,
            taskName: 'Task49',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [2, 7, 3, 4],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 150,
            projectID: 1005,
            taskName: 'Task50',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 151,
            projectID: 1001,
            taskName: 'Task51',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 152,
            projectID: 1002,
            taskName: 'Task52',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 153,
            projectID: 1003,
            taskName: 'Task53',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 154,
            projectID: 1004,
            taskName: 'Task54',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 155,
            projectID: 1005,
            taskName: 'Task55',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 156,
            projectID: 1001,
            taskName: 'Task56',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 157,
            projectID: 1002,
            taskName: 'Task57',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 158,
            projectID: 1003,
            taskName: 'Task58',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 159,
            projectID: 1004,
            taskName: 'Task59',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 160,
            projectID: 1005,
            taskName: 'Task60',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 161,
            projectID: 1001,
            taskName: 'Task61',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 162,
            projectID: 1002,
            taskName: 'Task62',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 163,
            projectID: 1003,
            taskName: 'Task63',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 164,
            projectID: 1004,
            taskName: 'Task64',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 165,
            projectID: 1005,
            taskName: 'Task65',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 166,
            projectID: 1001,
            taskName: 'Task66',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 167,
            projectID: 1002,
            taskName: 'Task67',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 168,
            projectID: 1003,
            taskName: 'Task68',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 169,
            projectID: 1004,
            taskName: 'Task69',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 170,
            projectID: 1005,
            taskName: 'Task70',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 171,
            projectID: 1001,
            taskName: 'Task71',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 172,
            projectID: 1002,
            taskName: 'Task72',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 173,
            projectID: 1003,
            taskName: 'Task73',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 174,
            projectID: 1004,
            taskName: 'Task74',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 175,
            projectID: 1005,
            taskName: 'Task75',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 176,
            projectID: 1001,
            taskName: 'Task76',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 177,
            projectID: 1002,
            taskName: 'Task77',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 178,
            projectID: 1003,
            taskName: 'Task78',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 179,
            projectID: 1004,
            taskName: 'Task79',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 180,
            projectID: 1005,
            taskName: 'Task80',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 181,
            projectID: 1001,
            taskName: 'Task81',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 182,
            projectID: 1002,
            taskName: 'Task82',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 183,
            projectID: 1003,
            taskName: 'Task83',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 184,
            projectID: 1004,
            taskName: 'Task84',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [2, 7, 3, 4],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 185,
            projectID: 1005,
            taskName: 'Task85',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 186,
            projectID: 1001,
            taskName: 'Task86',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 187,
            projectID: 1002,
            taskName: 'Task87',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 188,
            projectID: 1003,
            taskName: 'Task88',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 189,
            projectID: 1004,
            taskName: 'Task89',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 190,
            projectID: 1005,
            taskName: 'Task90',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 191,
            projectID: 1001,
            taskName: 'Task91',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 192,
            projectID: 1002,
            taskName: 'Task92',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 193,
            projectID: 1003,
            taskName: 'Task93',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 194,
            projectID: 1004,
            taskName: 'Task94',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 195,
            projectID: 1005,
            taskName: 'Task95',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 196,
            projectID: 1001,
            taskName: 'Task96',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 197,
            projectID: 1002,
            taskName: 'Task97',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 198,
            projectID: 1003,
            taskName: 'Task98',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 199,
            projectID: 1004,
            taskName: 'Task99',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 200,
            projectID: 1005,
            taskName: 'Task200',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 201,
            projectID: 1001,
            taskName: 'Task201',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 202,
            projectID: 1002,
            taskName: 'Task202',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 203,
            projectID: 1003,
            taskName: 'Task203',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 204,
            projectID: 1004,
            taskName: 'Task204',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 205,
            projectID: 1005,
            taskName: 'Task205',
            priority: {key: 3, name: 'High'},
            severity: {key: 2, name: 'Moderate'},
            dueDate: {key: 2, name: 'Moderate'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 206,
            projectID: 1001,
            taskName: 'Task206',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 207,
            projectID: 1002,
            taskName: 'Task207',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 208,
            projectID: 1003,
            taskName: 'Task208',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 5, 6, 7],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 209,
            projectID: 1004,
            taskName: 'Task209',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [2, 7, 3, 4],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 210,
            projectID: 1005,
            taskName: 'Task210',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 211,
            projectID: 1001,
            taskName: 'Task211',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 212,
            projectID: 1002,
            taskName: 'Task212',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 213,
            projectID: 1003,
            taskName: 'Task213',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 214,
            projectID: 1004,
            taskName: 'Task214',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 215,
            projectID: 1005,
            taskName: 'Task215',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 216,
            projectID: 1001,
            taskName: 'Task216',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 217,
            projectID: 1002,
            taskName: 'Task217',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 218,
            projectID: 1003,
            taskName: 'Task218',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 219,
            projectID: 1004,
            taskName: 'Task219',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [2, 7, 3, 4],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 220,
            projectID: 1005,
            taskName: 'Task220',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 221,
            projectID: 1001,
            taskName: 'Task221',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 222,
            projectID: 1002,
            taskName: 'Task222',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 223,
            projectID: 1003,
            taskName: 'Task223',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 224,
            projectID: 1004,
            taskName: 'Task224',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 225,
            projectID: 1005,
            taskName: 'Task225',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 226,
            projectID: 1001,
            taskName: 'Task226',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 227,
            projectID: 1002,
            taskName: 'Task227',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 228,
            projectID: 1003,
            taskName: 'Task228',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 229,
            projectID: 1004,
            taskName: 'Task229',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 230,
            projectID: 1005,
            taskName: 'Task230',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 231,
            projectID: 1001,
            taskName: 'Task231',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 232,
            projectID: 1002,
            taskName: 'Task232',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 233,
            projectID: 1003,
            taskName: 'Task233',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 234,
            projectID: 1004,
            taskName: 'Task234',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 235,
            projectID: 1005,
            taskName: 'Task235',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 6, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 236,
            projectID: 1001,
            taskName: 'Task236',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 237,
            projectID: 1002,
            taskName: 'Task237',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 238,
            projectID: 1003,
            taskName: 'Task238',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 239,
            projectID: 1004,
            taskName: 'Task239',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 240,
            projectID: 1005,
            taskName: 'Task240',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 241,
            projectID: 1001,
            taskName: 'Task241',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 242,
            projectID: 1002,
            taskName: 'Task242',
            priority: {key: 3, name: 'High'},
            severity: {key: 0, name: 'Critical'},
            dueDate: {key: 0, name: 'Critical'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 243,
            projectID: 1003,
            taskName: 'Task243',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 244,
            projectID: 1004,
            taskName: 'Task244',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 245,
            projectID: 1005,
            taskName: 'Task245',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 246,
            projectID: 1001,
            taskName: 'Task246',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 247,
            projectID: 1002,
            taskName: 'Task247',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [3, 4, 5, 3],
            status: 'In progress',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 248,
            projectID: 1003,
            taskName: 'Task248',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [1, 6, 9, 3],
            status: 'Done',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 249,
            projectID: 1004,
            taskName: 'Task249',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }, {
            id: 250,
            projectID: 1005,
            taskName: 'Task250',
            priority: {key: 3, name: 'High'},
            severity: {key: 1, name: 'Major'},
            dueDate: {key: 1, name: 'Major'},
            asignee: 'Companyname@mail.com',
            relatedTasks: [4, 7, 2, 1],
            status: 'Review',
            dateAdd: new Date(2016, 3, 26, 9, 30)
        }];
    /**
     * @ngdoc method
     * @name getDefectsByProjectID
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to get all defects from a project
     * @param {Integer} projectID - the ID of the project
     * @returns {Array} if the given projectID is not a number then returns null, else returns the list of defects which belongs to the given project
     */
    self.getDefectsByProjectID = function (projectID) {
        if (!projectID || isNaN(projectID)) {
            return null;
        }
        console.log('Se apeleaza Defects');

        self.list = [];
        for (var i = 0; i < self.defects.length; i++) {
            if (self.defects[i].projectID === projectID) {
                self.list.push(self.defects[i]);
            }
        }
        self.listNr = self.list.length;
        return self.list;
    };
    /**
     * @ngdoc method
     * @name getMaxID
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to get the maximum defectID
     * @returns {Integer} maximum defectID
     */
    self.getMaxID = function () {
        return Math.max.apply(Math, self.defects.map(function (d) {
            return d.id;
        }));
    };
    /**
     * @ngdoc method
     * @name addDefect
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to insert a defect into defects array
     * @param {Object} defect - defect which will be inserted in the defects array
     */
    self.addDefect = function (defect) {
        if (!defect) {
            return null;
        }
        
        defect.id = self.getMaxID() + 1;
        self.defects.push(defect);
    };
    /**
     * @ngdoc method
     * @name deleteDefectById
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to delete a defect from defects array by ID
     * @param {Integer} defectID - ID of the defect which will be deleted from the defects array
     * @returns if the given ID is not a number then returns null
     */
    self.deleteDefectById = function (defectID) {
        if (!defectID || isNaN(defectID)) {
            return null;
        }

        for (var i = 0; i < self.defects.length; i++) {
            if (self.defects[i].id === defectID) {
                self.defects.splice(i, 1);
                break;
            }
        }
    };
    /**
     * @ngdoc method
     * @name getDefectsIDStatus
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to get all defects with id and status from a project
     * @param projectID - ID of the project
     * @returns {Array} if the given ID is not a number then returns null, else returns the list of defects with id and status
     */
    self.getDefectsIDStatus = function (projectID) {
        if (!projectID || isNaN(projectID)) {
            return null;
        }

        self.list = [];
        
        for (var i = 0; i < self.defects.length; i++) {
            if (self.defects[i].projectID === projectID) {
                self.list.push({id: self.defects[i].id, status: self.defects[i].status});
            }
        }
        
        return list;
    };
    /**
     * @ngdoc method
     * @name getActivityStream
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to get the activity stream
     * @param {Integer} nr - number of defects
     * @returns {Array} activity stream
     */
    self.getActivityStream = function (nr) {
        if (!nr || isNaN(nr)) {
            return null;
        }
        
        console.log("AddDate:", self.defects[0].dateAdd);
        console.log("TypeofAddDate:", typeof (self.defects[0].dateAdd));
        var activity = $filter('orderBy')(self.defects, 'dateAdd', true);
        console.log("Activity: ", activity.slice(0, nr));
        return activity.slice(0, nr);
    };
    /**
     * @ngdoc method
     * @name changeDefectStatus
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to change a defect's status
     * @param defectID - ID of the defect
     * @param newStatus - the new status of the defect
     * @returns if the given ID is not a number then returns null
     */
    self.changeDefectStatus = function (defectID, newStatus) {
        if (!defectID || !newStatus || isNaN(defectID)) {
            return null;
        }
        
        for (var i = 0; i < self.defects.length; i++) {
            if (self.defects[i].id === defectID) {
                self.defects[i].status = newStatus;
                break;
            }
        }
    };
    /**
     * @ngdoc method
     * @name getDefectsNr
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to get the defects number
     * @returns {Integer} number of defects
     */
    self.getDefectsNr = function () {
        return self.listNr;
    };
    /**
     * @ngdoc method
     * @name getDefectsPage
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to get the defects page with itemsPerPage items on a page from a project
     * @param {Integer} page - number of page
     * @param {Integer} itemsPerPage - number of items on a page
     * @param {Integer} projectId - ID of the project
     * @returns {Array} if the given projectId or the number of items or the page is not a number returns null, else returns the list of defects from the given page
     */
    self.getDefectsPage = function (page, itemsPerPage, projectId) {
        if (!page || isNaN(page)) {
            return null;
        }
        if (!itemsPerPage || isNaN(itemsPerPage)) {
            return null;
        }
        if (!projectId || isNaN(projectId)) {
            return null;
        }
        
        var projectDefects = self.getDefectsByProjectID(projectId);
        var defectsPage = [];
        var startIndex = (page - 1) * itemsPerPage;

        for (i = 0; i < itemsPerPage; i++) {
            if (projectDefects[startIndex + i] !== undefined) {
                defectsPage.push(projectDefects[startIndex + i]);
            } else {
                break;
            }
        }
        return defectsPage;
    };
      /**
     * @ngdoc method
     * @name getDefectsContent
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to get the defects grouped by status
     * @returns {Object} defects grouped by status 
     */
    self.getDefectsContent = function () {
        var punchLists = {
            content: []
        };
        var getList = self.list;

        var statusList = ['Review', 'Done', 'In Progress', null];
        for (i = 0; i < statusList.length; i++) {
            var statusFilter = $filter('filter')(getList, statusList[i], false);
            punchLists.content[statusList[i]] = statusFilter;
        }
        return punchLists;
    };
    /**
     * @ngdoc method
     * @name sortDefectsByParam
     * @methodOf app.services:defectsService
     *
     * @description
     * Method to sort the defects array by a specific field
     * @param {String} param - a predicate to determine the order of elements
     * @param {Boolean} reverse - if true, then reverse the sorting order
     */
    self.sortDefectsByParam = function (param, reverse) {
        self.defects = $filter('orderBy')(self.defects, param, reverse);
    };
});