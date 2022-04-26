function convertToIntegers(strings) {
    const tab = []
    if(strings){for(let i=0; i<strings.length;i++)
    {
        tab.push(parseInt(strings[i]))
    }
    return tab }
    else return null;
}
