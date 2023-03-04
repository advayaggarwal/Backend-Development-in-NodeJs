function fetchNextElement(array)
{
    let idx = 0;
    function next(){
        if(idx == array.length) return undefined;
        const nextElement = array[idx];
        idx++;
        return nextElement;
    }
    return {next};
}

const automaticFetcher = fetchNextElement([100, 1, 2, 4, 5, 10]);

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());