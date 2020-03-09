


var poll = function () {
    $.ajax({
        url: "/cp",
        success: function(new_record){
            console.log("received from backend:",new_record); // { text: "Some data" } -> will be printed in your browser console
            flexmonster.updateData(
                {data: [new_record]},
                {partial: true});
            poll();
        },
        error: function() {
            poll();
        },
        timeout: 30000 // 30 seconds
    });
};

// Make sure to call it once first,
poll();