app.service('subcontractorsService', function ($filter) {
    var self = this;
    self.subcontractors = [{
            id: 101,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company1',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 102,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company2',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 103,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company3',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 104,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company4',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 105,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company5',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 106,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company6',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 107,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company7',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 108,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company8',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 109,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company9',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 110,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company10',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 111,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company11',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 112,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company12',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 113,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company13',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 114,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company14',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 115,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company15',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 116,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company16',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 117,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company17',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 118,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company18',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 119,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company19',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 120,
            projectID: 1005,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company20',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 121,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company21',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 122,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company22',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 123,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company23',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 124,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company24',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 125,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company25',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 126,
            projectID: 1001,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company26',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 127,
            projectID: 1002,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company27',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 128,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company28',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 129,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company29',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 130,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company30',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 131,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company31',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 132,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company32',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 133,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company33',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 134,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company34',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 135,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company35',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 136,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company36',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 137,
            projectID: 1002,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company37',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 138,
            projectID: 1003,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company38',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 139,
            projectID: 1004,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company39',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 140,
            projectID: 1005,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company40',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 141,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company41',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 142,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company42',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 143,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company43',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 144,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company44',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 145,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company45',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 146,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company46',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 147,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company47',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 148,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company48',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 149,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company49',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 150,
            projectID: 1005,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company50',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 151,
            projectID: 1001,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company51',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 152,
            projectID: 1002,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company52',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 153,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company53',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 154,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company54',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 155,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company55',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 156,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company56',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 157,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company57',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 158,
            projectID: 1003,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company58',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 159,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company59',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 160,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company60',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 161,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company61',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 162,
            projectID: 1002,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company62',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 163,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company63',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 164,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company64',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 165,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company65',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 166,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company66',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 167,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company67',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 168,
            projectID: 1003,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company68',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 169,
            projectID: 1004,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company69',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 170,
            projectID: 1005,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company70',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 171,
            projectID: 1001,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company71',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 172,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company72',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 173,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company73',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 174,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company74',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 175,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company75',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 176,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company76',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 177,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company77',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 178,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company78',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 179,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company79',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 180,
            projectID: 1005,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company80',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 181,
            projectID: 1001,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company81',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 182,
            projectID: 1002,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company82',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 183,
            projectID: 1003,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company83',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 184,
            projectID: 1004,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company84',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 185,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company85',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 186,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company86',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 187,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company87',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 188,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company88',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 189,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company89',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 190,
            projectID: 1005,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company90',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 181,
            projectID: 1001,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company81',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 182,
            projectID: 1002,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company82',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 183,
            projectID: 1003,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company83',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 184,
            projectID: 1004,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company84',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 185,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company85',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 186,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company86',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 187,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company87',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 188,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company88',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 189,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company89',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 190,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company90',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 191,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company91',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 192,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company92',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 193,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company93',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 194,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company94',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 195,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company95',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 196,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company96',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 197,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company97',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 198,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company98',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 199,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company99',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 200,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company100',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 201,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company101',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 202,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company102',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 203,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company103',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 204,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company104',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 205,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company105',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 206,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company106',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 207,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company107',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 208,
            projectID: 1003,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company108',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 209,
            projectID: 1004,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company109',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 210,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company110',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 211,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company111',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 212,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company112',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 213,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company113',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 214,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company114',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 215,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company115',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 216,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company116',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 217,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company117',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 218,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company118',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 219,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company119',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 220,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company120',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 221,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company121',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 222,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company122',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 223,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company123',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 224,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company124',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 225,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company125',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 226,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company126',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 227,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company127',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 228,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company128',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 229,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company129',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 230,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company130',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 231,
            projectID: 1001,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company131',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 232,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company132',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 233,
            projectID: 1003,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company133',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 234,
            projectID: 1004,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company134',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 235,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company135',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 236,
            projectID: 1001,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company136',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 237,
            projectID: 1002,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company137',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 238,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company138',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 239,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company139',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 240,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company140',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }, {
            id: 241,
            projectID: 1001,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company141',
            email: 'Company1@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [5, 4, 1, 2]
        }, {
            id: 242,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company142',
            email: 'Company1@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [3, 5, 1, 7]
        }, {
            id: 243,
            projectID: 1003,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company143',
            email: 'Company2@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [8, 1, 4, 7]
        }, {
            id: 244,
            projectID: 1004,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company144',
            email: 'Company3@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [1, 7, 3, 9]
        }, {
            id: 245,
            projectID: 1005,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company145',
            email: 'Company4@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 246,
            projectID: 1001,
            name: 'John Doe',
            userName: 'jdoe',
            company: 'Company146',
            email: 'Company5@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [2, 5, 6, 7]
        }, {
            id: 247,
            projectID: 1002,
            name: 'Peter Stuart',
            userName: 'peters',
            company: 'Company147',
            email: 'Company6@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [7, 2, 4, 5]
        }, {
            id: 248,
            projectID: 1003,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company148',
            email: 'Company7@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [1, 2, 3, 4]
        }, {
            id: 249,
            projectID: 1004,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company149',
            email: 'Company8@mail.com',
            phoneNr: ['+40742357819', '+40752736281'],
            tasks: [3, 8, 1, 5]
        }, {
            id: 250,
            projectID: 1005,
            name: 'Harry Anderson',
            userName: 'harrya',
            company: 'Company150',
            email: 'Company9@mail.com',
            phoneNr: ['+40746536782', '+40752531232'],
            tasks: [2, 6, 8, 3]
        }];
    /**
     * @ngdoc method
     * @name getSubcontractorsNr
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to get the subcontractors number
     * @returns {Integer} number of subcontractors
     */
    self.getSubcontractorsNr = function () {
        return self.listNr;
    };
    /**
     * @ngdoc method
     * @name getSubcontractorsByProjectID
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to get all subcontractors from a project
     * @param {Integer} projectID - ID of the project
     * @returns {Array} if the given projectID is not a number then returns null, else returns the list of subcontractors which belongs to the given project 
     */
    self.getSubcontractorsByProjectID = function (projectID) {
        if (!projectID || isNaN(projectID)) {
            return null;
        }
        console.log('Se apeleaza subcontractors');
        self.list = [];

        for (var i = 0; i < self.subcontractors.length; i++) {
            if (self.subcontractors[i].projectID === projectID) {
                self.list.push(self.subcontractors[i]);
            }
        }
        self.listNr = self.list.length;
        return self.list;
    };
    /**
     * @ngdoc method
     * @name getMaxID
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to get the maximum subcontractorID
     * @returns {Integer} maximum subcontractorID
     */
    self.getMaxID = function () {
        return Math.max.apply(Math, self.subcontractors.map(function (d) {
            return d.id;
        }));
    };
    /**
     * @ngdoc method
     * @name addSubcontractor
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to insert a subcontractor into subcontractors array
     * @param {Object} subcont - subcontractor which will be inserted in the subcontractors array
     */
    self.addSubcontractor = function (subcont) {
        if (!subcont) {
            return null;
        }
        subcont.id = self.getMaxID() + 1;
        self.subcontractors.push(subcont);
    };
    /**
     * @ngdoc method
     * @name deleteSubcontractorByIndex
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to delete a subcontractor from subcontractors array by index
     * @param {Integer} idx - index of the subcontractor which will be deleted from the subcontractors array
     * @returns if the given index is not a number then returns null
     */
    self.deleteSubcontractorByIndex = function (idx) {
        if (!idx || isNaN(idx)) {
            return null;
        }
        self.subcontractors.splice(idx, 1);
    };
    /**
     * @ngdoc method
     * @name deleteSubcontractorById
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to delete a subcontractor from subcontractors array by ID
     * @param {Integer} subcontID - ID of the subcontractor which will be deleted from the subcontractors array
     * @returns if the given ID is not a number then returns null
     */
    self.deleteSubcontractorById = function (subcontID) {
        if (!subcontID || isNaN(subcontID)) {
            return null;
        }
        for (var i = 0; i < self.subcontractors.length; i++) {
            if (self.subcontractors[i].id === subcontID) {
                self.subcontractors.splice(i, 1);
                break;
            }
        }
    };
    /**
     * @ngdoc method
     * @name sortSubcontractorsByParam
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to sort the subcontractors array by a specific field
     * @param {String} param - a predicate to determine the order of elements
     * @param {Boolean} reverse - if true, then reverse the sorting order
     */
    self.sortSubcontractorsByParam = function (param, reverse) {
        self.subcontractors = $filter('orderBy')(self.subcontractors, param, reverse);
    };
    /**
     * @ngdoc method
     * @name getSubcontractorsPage
     * @methodOf app.services:subcontractorsService
     *
     * @description
     * Method to get the subcontractors page with itemsPerPage items on a page from a project
     * @param {Integer} page - number of page
     * @param {Integer} itemsPerPage - number of items on a page
     * @param {Integer} projectId - ID of the project
     * @returns {Array} if the given projectID or the number of items or the page is not a number returns null, else returns the list of subcontractors from the given page
     */
    self.getSubcontractorsPage = function (page, itemsPerPage, projectId) {
        if (!page || isNaN(page)) {
            return null;
        }
        if (!itemsPerPage || isNaN(itemsPerPage)) {
            return null;
        }
        if (!projectId || isNaN(projectId)) {
            return null;
        }
        
        var projectSubcontractors = self.getSubcontractorsByProjectID(projectId);
        var subcontractorsPage = [];
        var startIndex = (page - 1) * itemsPerPage;
        
        for (i = 0; i < itemsPerPage; i++) {
            if (projectSubcontractors[startIndex + i] !== undefined) {
                subcontractorsPage.push(projectSubcontractors[startIndex + i]);
            } else {
                break;
            }
        }
        
        return subcontractorsPage;
    };
});
