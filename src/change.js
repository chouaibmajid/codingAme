function change(change){
    const two = change < 4? change>>1: [0,3,1,4,2][Math.floor(change) % 5],
      rest = change - two*2;
  
    return { 
      two,
      five: Math.floor((rest%10)/5), 
      ten: Math.floor(rest/10), 
    };
  }