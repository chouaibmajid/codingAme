function change(change) {
    // Your code goes here
    const two = change < 4? change>>1: [0,3,1,4,2][Math.floor(change) % 5],
    rest = change - two*2;
if(change === 1) return null
  return { 
    two,
    five: Math.floor((rest%10)/5), 
    ten: Math.floor(rest/10), 
  };
}