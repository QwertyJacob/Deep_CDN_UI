


var poll = function () {
    $.ajax({
        url: "/cp",
        success: function(data){
            console.log("received from backend:",data); // { text: "Some data" } -> will be printed in your browser console
            pivot.updateData(
                {data: data},
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