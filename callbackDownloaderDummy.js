function download(url, callback)
{
    console.log("Started downloading from url ", url);
    setTimeout(function exec(){ //mimicking the downloading process
        console.log("Completed downloading afer 5s");
        let data = "ABCD";
        callback(data);
    }, 5000);
}

download("xyz.com", function processData(data){
    console.log("Downloaded data is", data);
})