$(function(){
    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    })

    $('#setLimit').click(function(){
        var limit = $("#limit").val();
        if (limit){
            
            chrome.storage.sync.set({"limit": limit}, function(){
                close();
            });
        }
    })
     $("#resetTotal").click(function(){
         chrome.storage.sync.set({"total": 0});
         var notifOptions ={
            type: 'basic',
            iconUrl: 'budgetty48.png',
            title: 'Total Expenses Reset!',
            message: 'Your total expenses has been reset to 0'
        };
        chrome.notifications.create("limitNotif", notifOptions);
     });
});