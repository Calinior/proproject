app.service('drawingsService', function ($filter) {
    var self = this;
    self.drawings = [{
            id: 101,
            projectID: 1001,
            name: 'drawing1',
            code: '15783',
            revisions: 'Revision1',
            date: '23/10/2016',
            tasks: [2, 5, 6, 1]
        }, {
            id: 102,
            projectID: 1002,
            name: 'drawing2',
            code: '16788',
            revisions: 'Revision2',
            date: '23/10/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 103,
            projectID: 1003,
            name: 'drawing3',
            code: '18838',
            revisions: 'Revision3',
            date: '23/10/2016',
            tasks: [2, 5, 6, 1]
        }, {
            id: 104,
            projectID: 1004,
            name: 'drawing4',
            code: '12345',
            revisions: 'Revision4',
            date: '23/10/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 105,
            projectID: 1005,
            name: 'drawing5',
            code: '45732',
            revisions: 'Revision5',
            date: '23/10/2016',
            tasks: [2, 5, 6, 1]
        }, {
            id: 106,
            projectID: 1001,
            name: 'drawing6',
            code: '18838',
            revisions: 'Revision6',
            date: '23/10/2016',
            tasks: [2, 5, 6, 1]
        }, {
            id: 107,
            projectID: 1002,
            name: 'drawing7',
            code: '24578',
            revisions: 'Revision7',
            date: '23/10/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 108,
            projectID: 1003,
            name: 'drawing8',
            code: '18838',
            revisions: 'Revision8',
            date: '23/10/2016',
            tasks: [2, 5, 6, 1]
        }, {
            id: 109,
            projectID: 1004,
            name: 'drawing9',
            code: '12345',
            revisions: 'Revision9',
            date: '27/11/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 110,
            projectID: 1005,
            name: 'drawing10',
            code: '18838',
            revisions: 'Revision10',
            date: '27/11/2016',
            tasks: [2, 5, 6, 1]
        }, {
            id: 111,
            projectID: 1001,
            name: 'drawing11',
            code: '13683',
            revisions: 'Revision',
            date: '27/11/2016',
            tasks: [2, 5, 6, 1]
        }, {
            id: 112,
            projectID: 1002,
            name: 'drawing12',
            code: '12345',
            revisions: 'Revision1',
            date: '27/11/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 113,
            projectID: 1003,
            name: 'drawing13',
            code: '18838',
            revisions: 'Revision1',
            date: '27/11/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 114,
            projectID: 1004,
            name: 'drawing14',
            code: '12345',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 115,
            projectID: 1005,
            name: 'drawing15',
            code: '25634',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 116,
            projectID: 1001,
            name: 'drawing16',
            code: '18838',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 117,
            projectID: 1002,
            name: 'drawing17',
            code: '47823',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 118,
            projectID: 1003,
            name: 'drawing18',
            code: '18838',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 119,
            projectID: 1004,
            name: 'drawing19',
            code: '12345',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 120,
            projectID: 1005,
            name: 'drawing20',
            code: '27893',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 121,
            projectID: 1001,
            name: 'drawing21',
            code: '18838',
            revisions: 'Revision1',
            date: '05/05/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 122,
            projectID: 1002,
            name: 'drawing22',
            code: '34632',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 123,
            projectID: 1003,
            name: 'drawing23',
            code: '18838',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 124,
            projectID: 1004,
            name: 'drawing24',
            code: '90766',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 125,
            projectID: 1005,
            name: 'drawing25',
            code: '18838',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [4, 7, 1, 2]
        }, {
            id: 126,
            projectID: 1001,
            name: 'drawing26',
            code: '15743',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 127,
            projectID: 1002,
            name: 'drawing27',
            code: '12345',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 128,
            projectID: 1003,
            name: 'drawing28',
            code: '18838',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 129,
            projectID: 1004,
            name: 'drawing29',
            code: '36732',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 130,
            projectID: 1005,
            name: 'drawing30',
            code: '18838',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 131,
            projectID: 1001,
            name: 'drawing31',
            code: '18838',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 132,
            projectID: 1002,
            name: 'drawing32',
            code: '23765',
            revisions: 'Revision1',
            date: '01/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 133,
            projectID: 1003,
            name: 'drawing33',
            code: '18838',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 134,
            projectID: 1004,
            name: 'drawing34',
            code: '12345',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 135,
            projectID: 1005,
            name: 'drawing35',
            code: '45678',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 136,
            projectID: 1001,
            name: 'drawing36',
            code: '18838',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 137,
            projectID: 1002,
            name: 'drawing37',
            code: '34567',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 138,
            projectID: 1003,
            name: 'drawing38',
            code: '18838',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 139,
            projectID: 1004,
            name: 'drawing39',
            code: '12345',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 140,
            projectID: 1005,
            name: 'drawing40',
            code: '18838',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 141,
            projectID: 1001,
            name: 'drawing41',
            code: '18838',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 142,
            projectID: 1002,
            name: 'drawing42',
            code: '12345',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 143,
            projectID: 1003,
            name: 'drawing43',
            code: '67832',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 144,
            projectID: 1004,
            name: 'drawing44',
            code: '12345',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 145,
            projectID: 1005,
            name: 'drawing45',
            code: '18838',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [8, 2, 3, 5]
        }, {
            id: 146,
            projectID: 1001,
            name: 'drawing46',
            code: '12345',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 147,
            projectID: 1002,
            name: 'drawing47',
            code: '56789',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 148,
            projectID: 1003,
            name: 'drawing48',
            code: '80678',
            revisions: 'Revision1',
            date: '11/08/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 149,
            projectID: 1004,
            name: 'drawing49',
            code: '12345',
            revisions: 'Revision1',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 150,
            projectID: 1005,
            name: 'drawing50',
            code: '18838',
            revisions: 'Revision1',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 151,
            projectID: 1001,
            name: 'drawing51',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 152,
            projectID: 1002,
            name: 'drawing52',
            code: '25794',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 153,
            projectID: 1003,
            name: 'drawing53',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 154,
            projectID: 1004,
            name: 'drawing54',
            code: '12345',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 155,
            projectID: 1005,
            name: 'drawing55',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 156,
            projectID: 1001,
            name: 'drawing56',
            code: '34567',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 157,
            projectID: 1002,
            name: 'drawing57',
            code: '24673',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 158,
            projectID: 1003,
            name: 'drawing58',
            code: '86356',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 159,
            projectID: 1004,
            name: 'drawing59',
            code: '12345',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 160,
            projectID: 1004,
            name: 'drawing60',
            code: '87543',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 161,
            projectID: 1001,
            name: 'drawing61',
            code: '84756',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 162,
            projectID: 1002,
            name: 'drawing62',
            code: '26835',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 163,
            projectID: 1003,
            name: 'drawing63',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 164,
            projectID: 1004,
            name: 'drawing64',
            code: '12345',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 165,
            projectID: 1005,
            name: 'drawing65',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 166,
            projectID: 1001,
            name: 'drawing66',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 167,
            projectID: 1002,
            name: 'drawing67',
            code: '48367',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 168,
            projectID: 1003,
            name: 'drawing68',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 6, 2, 4]
        }, {
            id: 169,
            projectID: 1004,
            name: 'drawing69',
            code: '12345',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 170,
            projectID: 1005,
            name: 'drawing70',
            code: '18838',
            revisions: 'Revision2',
            date: '01/09/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 171,
            projectID: 1001,
            name: 'drawing71',
            code: '18838',
            revisions: 'Revision2',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 172,
            projectID: 1002,
            name: 'drawing72',
            code: '42764',
            revisions: 'Revision2',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 173,
            projectID: 1003,
            name: 'drawing73',
            code: '18838',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 174,
            projectID: 1004,
            name: 'drawing74',
            code: '12345',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 175,
            projectID: 1005,
            name: 'drawing75',
            code: '14098',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 176,
            projectID: 1001,
            name: 'drawing76',
            code: '18838',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 177,
            projectID: 1002,
            name: 'drawing77',
            code: '58464',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 178,
            projectID: 1003,
            name: 'drawing78',
            code: '18838',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 179,
            projectID: 1004,
            name: 'drawing79',
            code: '12345',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 180,
            projectID: 1005,
            name: 'drawing80',
            code: '18838',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 181,
            projectID: 1001,
            name: 'drawing81',
            code: '26834',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 182,
            projectID: 1002,
            name: 'drawing82',
            code: '12345',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 183,
            projectID: 1003,
            name: 'drawing83',
            code: '18838',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 184,
            projectID: 1004,
            name: 'drawing84',
            code: '12345',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 185,
            projectID: 1005,
            name: 'drawing85',
            code: '48309',
            revisions: 'Revision3',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 186,
            projectID: 1001,
            name: 'drawing86',
            code: '18838',
            revisions: 'Revision4',
            date: '16/12/2016',
            tasks: [7, 3, 4, 2]
        }, {
            id: 187,
            projectID: 1002,
            name: 'drawing87',
            code: '12345',
            revisions: 'Revision4',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 188,
            projectID: 1003,
            name: 'drawing88',
            code: '37465',
            revisions: 'Revision4',
            date: '16/12/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 189,
            projectID: 1004,
            name: 'drawing89',
            code: '12345',
            revisions: 'Revision4',
            date: '16/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 190,
            projectID: 1004,
            name: 'drawing90',
            code: '12345',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 191,
            projectID: 1001,
            name: 'drawing91',
            code: '27915',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 192,
            projectID: 1002,
            name: 'drawing92',
            code: '12345',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 193,
            projectID: 1003,
            name: 'drawing93',
            code: '18838',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 194,
            projectID: 1004,
            name: 'drawing94',
            code: '37546',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 195,
            projectID: 1005,
            name: 'drawing95',
            code: '18838',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 196,
            projectID: 1001,
            name: 'drawing96',
            code: '18838',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [4, 7, 2, 3]
        }, {
            id: 197,
            projectID: 1002,
            name: 'drawing97',
            code: '12345',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 198,
            projectID: 1003,
            name: 'drawing98',
            code: '17845',
            revisions: 'Revision4',
            date: '17/04/2016',
            tasks: [4, 7, 2, 3]
        }, {
            id: 199,
            projectID: 1004,
            name: 'drawing99',
            code: '12345',
            revisions: 'Revision4',
            date: '02/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 200,
            projectID: 1005,
            name: 'drawing100',
            code: '12345',
            revisions: 'Revision4',
            date: '02/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 201,
            projectID: 1001,
            name: 'drawing101',
            code: '38274',
            revisions: 'Revision4',
            date: '02/12/2016',
            tasks: [4, 7, 2, 3]
        }, {
            id: 202,
            projectID: 1002,
            name: 'drawing102',
            code: '12345',
            revisions: 'Revision5',
            date: '02/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 203,
            projectID: 1003,
            name: 'drawing103',
            code: '18838',
            revisions: 'Revision5',
            date: '02/12/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 204,
            projectID: 1004,
            name: 'drawing104',
            code: '14684',
            revisions: 'Revision5',
            date: '02/12/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 205,
            projectID: 1005,
            name: 'drawing105',
            code: '18838',
            revisions: 'Revision5',
            date: '02/12/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 206,
            projectID: 1001,
            name: 'drawing106',
            code: '18838',
            revisions: 'Revision5',
            date: '02/12/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 207,
            projectID: 1002,
            name: 'drawing107',
            code: '37847',
            revisions: 'Revision5',
            date: '18/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 208,
            projectID: 1003,
            name: 'drawing108',
            code: '18838',
            revisions: 'Revision5',
            date: '18/08/2016',
            tasks: [1, 8, 3, 4]
        }, {
            id: 209,
            projectID: 1004,
            name: 'drawing109',
            code: '12345',
            revisions: 'Revision5',
            date: '18/08/2016',
            tasks: [1, 2, 3, 4]
        }, {
            id: 210,
            projectID: 1005,
            name: 'drawing110',
            code: '47374',
            revisions: 'Revision5',
            date: '18/08/2016',
            tasks: [1, 2, 3, 4]
        }];
    /**
     * @ngdoc method
     * @name getDrawingsNr
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to get the drawings number 
     * @returns {Integer} number of drawings
     */
    self.getDrawingsNr = function () {
        return self.listNr;
    };
    /**
     * @ngdoc method
     * @name getDrawingsByProjectID
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to get all drawings from a project
     * @param {Integer} projectID - the ID of the project
     * @returns {Array} if the given projectID is not a number then returns null, else returns the list of drawings which belongs to the given project
     */
    self.getDrawingsByProjectID = function (projectID) {
        if (!projectID || isNaN(projectID)) {
            return null;
        }
        console.log('Se apeleaza Drawings');
        self.list = [];
        for (var i = 0; i < self.drawings.length; i++) {
            if (self.drawings[i].projectID === projectID) {
                self.list.push(self.drawings[i]);
            }
        }
        self.listNr = self.list.length;
        return self.list;
    };
    /**
     * @ngdoc method
     * @name getMaxID
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to get the maximum drawingID
     * @returns {Integer} maximum drawingID
     */
    self.getMaxID = function () {
        return Math.max.apply(Math, self.drawings.map(function (d) {
            return d.id;
        }));
    };
    /**
     * @ngdoc method
     * @name addDrawing
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to insert a drawing into drawings array
     * @param {Object} drawing - drawing which will be inserted in the drawings array
     */
    self.addDrawing = function (drawing) {
        if (!drawing) {
            return null;
        }

        drawing.id = self.getMaxID() + 1;
        self.drawings.push(drawing);
    };
    /**
     * @ngdoc method
     * @name deleteDrawingById
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to delete a drawing from drawings array by ID
     * @param {Integer} drawingID - ID of the drawing which will be deleted from the drawings array
     * @returns if the given ID is not a number then returns null
     */
    self.deleteDrawingById = function (drawingID) {
        if (!drawingID || isNaN(drawingID)) {
            return null;
        }

        for (var i = 0; i < self.drawings.length; i++) {
            if (self.drawings[i].id === drawingID) {
                self.drawings.splice(i, 1);
                break;
            }
        }
    };
    /**
     * @ngdoc method
     * @name updateDrawing
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to update a drawing
     * @param {Object} drawing - contains the new value of the drawing which will be updated
     */
    self.updateDrawing = function (drawing) {
        if (!drawing) {
            return null;
        }

        for (var i = 0; i < self.drawings.length; i++) {
            if (self.drawings[i].id === drawing.id) {
                self.drawings[i].name = drawing.name;
                self.drawings[i].code = drawing.code;
                self.drawings[i].revisions = drawing.revisions;
                self.drawings[i].date = drawing.date;
                break;
            }
        }
    };
    /**
     * @ngdoc method
     * @name sortDrawingsByParam
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to sort the drawings array by a specific field
     * @param {String} param - a predicate to determine the order of elements
     * @param {Boolean} reverse - if true, then reverse the sorting order
     */
    self.sortDrawingsByParam = function (param, reverse) {
        self.drawings = $filter('orderBy')(self.drawings, param, reverse);
    };
    /**
     * @ngdoc method
     * @name getDrawingsPage
     * @methodOf app.services:drawingsService
     *
     * @description
     * Method to get the drawings page with itemsPerPage items on a page from a project
     * @param {Integer} page - number of page
     * @param {Integer} itemsPerPage - number of items on a page
     * @param {Integer} projectId - ID of the project
     * @returns {Array} if the given projectID or the number of items or the page is not a number returns null, else returns the list of drawings from the given page
     */
    self.getDrawingsPage = function (page, itemsPerPage, projectId) {
        if (!page || isNaN(page)) {
            return null;
        }
        if (!itemsPerPage || isNaN(itemsPerPage)) {
            return null;
        }
        if (!projectId || isNaN(projectId)) {
            return null;
        }
        
        var projectList = self.getDrawingsByProjectID(projectId);
        var drawingsPage = [];
        var startIndex = (page - 1) * itemsPerPage;
        for (i = 0; i < itemsPerPage; i++) {
            if (projectList[startIndex + i] !== undefined) {
                drawingsPage.push(projectList[startIndex + i]);
            } else {
                break;
            }
        }
        return drawingsPage;
    };
});