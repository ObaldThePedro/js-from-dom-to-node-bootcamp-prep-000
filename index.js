// write your code below!
console.log("Hello World")

var katzDeliLine = []

function takeANumber(katzDeliLine,name)
{
    var index = 0;
    katzDeliLine.push(name);
    index = katzDeliLine.length;

    return "Welcome " + name + ". You are number " + index + " in line."
}

function nowServing(katzDeliLine)
{   
    if(katzDeliLine.length != 0)
    {
        return "Currently serving " + katzDeliLine.shift(0);
    }
    else{
        return "There is nobody waiting to be served!"
    }
}

function currentLine(katzDeliLine)
{
    var list = [];

    if(katzDeliLine.length === 0)
    {
        return "The line is currently empty!";
    }
    else
    {
        for(let i = 0;i < katzDeliLine.length;i++)
        {
            list.push(' ' + (i + 1) +  ". " + katzDeliLine[i] + ' ');
        }
        return "The line is currently: " + list;
    }
}

console.log(takeANumber(katzDeliLine, "Pedro"));
console.log(takeANumber(katzDeliLine, "Jose"));
console.log(nowServing(katzDeliLine));
console.log(nowServing(katzDeliLine));
console.log(nowServing(katzDeliLine));
console.log(takeANumber(katzDeliLine, "Jose"));
console.log(takeANumber(katzDeliLine, "Alberto"));
console.log(takeANumber(katzDeliLine, "Chumbinho"));
console.log(currentLine(katzDeliLine));
console.log(nowServing(katzDeliLine));
console.log(takeANumber(katzDeliLine, "Pedro"));


