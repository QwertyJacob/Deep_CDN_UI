cp_headers_array =  [{
    "windowstart": {"type": "datetime"},
    "windowend": {"type": "datetime"},
    "channel": {"type": "number"},
    "node_id": {"type": "string"},
    "offset": {"type": "id"},
    "req_served": {"type": "number"},
    "payload_served": {"type": "number"},
    "total_delay": {"type": "number"},
    "channel_performance": {"type": "number"}
},{
    windowstart: '2018-07-24T00:00:00.000Z',
    windowend: '2018-07-24T00:01:00.000Z',
    channel: 1840,
    node_id: 'MIVVDN06DN02',
    offset: 0,
    req_served: 134,
    payload_served: 65968575,
    total_delay: 1817,
    channel_performance: 36.30631535498074
}];

cp_sample_array =  [{
    "windowstart": {"type": "datetime"},
    "windowend": {"type": "datetime"},
    "channel": {"type": "number"},
    "node_id": {"type": "string"},
    "offset": {"type": "id"},
    "req_served": {"type": "number"},
    "payload_served": {"type": "number"},
    "total_delay": {"type": "number"},
    "channel_performance": {"type": "number"}
},{
    windowstart: '2018-07-24T00:00:00.000Z',
    windowend: '2018-07-24T00:01:00.000Z',
    channel: 1840,
    node_id: 'MIVVDN06DN02',
    offset: 0,
    req_served: 134,
    payload_served: 65968575,
    total_delay: 1817,
    channel_performance: 36.30631535498074
},{
    windowstart: '2018-07-24T00:00:45.000Z',
    windowend: '2018-07-24T00:01:45.000Z',
    channel: 945,
    node_id: 'MIVVDN05DN01',
    offset: 1,
    req_served: 1103,
    payload_served: 569450896,
    total_delay: 7000,
    channel_performance: 81.350128
},{
    windowstart: '2018-07-23T23:59:15.000Z',
    windowend: '2018-07-24T00:00:15.000Z',
    channel: 815,
    node_id: 'MIVVDN05DN01',
    offset: 2,
    req_served: 1329,
    payload_served: 560998375,
    total_delay: 5460,
    channel_performance: 102.74695512820513
},{
    windowstart: '2018-07-24T00:00:45.000Z',
    windowend: '2018-07-24T00:01:45.000Z',
    channel: 815,
    node_id: 'MIVVDN05DN01',
    offset: 3,
    req_served: 1257,
    payload_served: 552227236,
    total_delay: 4427,
    channel_performance: 124.74073548678564
},{
    windowstart: '2018-07-24T00:00:45.000Z',
    windowend: '2018-07-24T00:01:45.000Z',
    channel: 1869,
    node_id: 'MIVVDN06DN02',
    offset: 4,
    req_served: 85,
    payload_served: 28455339,
    total_delay: 857,
    channel_performance: 33.20342940490082
},{
    windowstart: '2018-07-24T00:00:00.000Z',
    windowend: '2018-07-24T00:01:00.000Z',
    channel: 945,
    node_id: 'MIVVDN05DN01',
    offset: 5,
    req_served: 1444,
    payload_served: 681118250,
    total_delay: 8184,
    channel_performance: 83.22559261974584
},{
    windowstart: '2018-07-24T00:00:00.000Z',
    windowend: '2018-07-24T00:01:00.000Z',
    channel: 1869,
    node_id: 'MIVVDN06DN02',
    offset: 6,
    req_served: 73,
    payload_served: 24867506,
    total_delay: 752,
    channel_performance: 33.0684920212766
},{
    windowstart: '2018-07-23T23:59:15.000Z',
    windowend: '2018-07-24T00:00:15.000Z',
    channel: 945,
    node_id: 'MIVVDN05DN01',
    offset: 7,
    req_served: 1325,
    payload_served: 610333230,
    total_delay: 8723,
    channel_performance: 69.96827123695977
},{
    windowstart: '2018-07-23T23:59:15.000Z',
    windowend: '2018-07-24T00:00:15.000Z',
    channel: 1869,
    node_id: 'MIVVDN06DN02',
    offset: 8,
    req_served: 46,
    payload_served: 15399397,
    total_delay: 449,
    channel_performance: 34.297097995545656
},{
    windowstart: '2018-07-23T23:59:15.000Z',
    windowend: '2018-07-24T00:00:15.000Z',
    channel: 1840,
    node_id: 'MIVVDN06DN02',
    offset: 9,
    req_served: 72,
    payload_served: 37341384,
    total_delay: 1090,
    channel_performance: 34.2581504587156
}];

var pivot = new Flexmonster({
    container: "pivotContainer",
    componentFolder: "./flexmonster/",
    toolbar: true,
    licenseKey: "Z7DZ-XB8J3V-3H2K70-1S1V32",
    report: {
        dataSource: {
            type: "json",
            data: cp_headers_array,
        },
        slice: {
            rows: [
                {
                    uniqueName: "windowstart"
                },
                {
                    uniqueName: "channel"
                },
                {
                    uniqueName: "node_id"
                }
            ],
            columns: [
                {
                    uniqueName: "[measures]"
                }
            ],
            measures: [
                {
                    uniqueName: "channel_performance",
                    aggregation: "average"
                }
            ]
        },
        options: {
            viewType: "charts",
            chart: {
                type: "line",
                showFilter: false
            }
        }
    }
});