const fs = require('fs');
const ff = require("fs").promises
async function CreateFile()
{
    try
    {
        await ff.writeFile("async.txt", "This File Created With Async");
        await console.log("File Is Created");
    }
    catch(err)
    {
        console.log(err.message)
    }
}
CreateFile()