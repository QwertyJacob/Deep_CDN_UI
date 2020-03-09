

var pivot = new Flexmonster({
    container: "pivotContainer",
    componentFolder: "./flexmonster/",
    toolbar: true,
    licenseKey: "Z7DZ-XB8J3V-3H2K70-1S1V32",
    dataSourceType: "json",
    data: [{
        "windowstart": {"type": "datetime"},
        "windowend": {"type": "datetime"},
        "channel": {"type": "number"},
        "node_id": {"type": "string"},
        "offset": {"type": "id"},
        "req_served": {"type": "number"},
        "payload_served": {"type": "number"},
        "total_delay": {"type": "number"},
        "channel_performance": {"type": "number"}
    }]
});