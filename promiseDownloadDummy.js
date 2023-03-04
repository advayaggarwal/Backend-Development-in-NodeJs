function download(url)
{
    console.log("Started downloading content from url", url);
    return new Promise(function exec(resolve, reject){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            const content = "ABCD";
            resolve(content);
        }, 5000);
    });
}

x = download("xyz.com")
x.then(function fulfillHandler(value){
    console.log("Downloaded data is", value);
    return "New Promise String"; //by default it returns undefined, this returned value is the parameter for x.then promise fulfillHandler
}, function rejectionHandler(value){
    console.log("Rejected with value", value);
}
)
.then(
    function newFulfillHandler(value){
        console.log("Value from chained then promise is", value);
    }
)