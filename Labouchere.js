
const betting = (result) => {

    if(SUM_NET < TARGET){

        if(result == 'win'){
            console.log("Betting Win");

            WIN += 1;
            SUM_NET += BET*PERCENT_WIN; 
            let remove_last = ARR_STEP.pop();
            let remove_first = ARR_STEP.shift();
            
            let ARR_STEP_length = ARR_STEP.length;
    
            BET = ARR_STEP[0] + ARR_STEP[ARR_STEP_length-1];
          
            console.log(ARR_STEP[ARR_STEP_length-1]);
            let obj_res = {
                arr_step : ARR_STEP,
                // last_bet : LAST_BET,
                // next_bet : NEXT_BET,
                bet : BET,
                sum_net : SUM_NET,
                win : WIN,
                lose : LOSE,
                arr_step_length : ARR_STEP_length
            }
    
            return obj_res;
    
        }else if(result == 'lose'){
    
            console.log("Betting Lose");
            LOSE += 1;
            SUM_NET += (-BET); 
            let add_last = ARR_STEP.push(BET);
            //let add_first = ARR_STEP.unshift(44);
            let ARR_STEP_length = ARR_STEP.length;
    
            BET = ARR_STEP[0] + ARR_STEP[ARR_STEP_length-1];
    
            let obj_res = {
                arr_step : ARR_STEP,
                // last_bet : LAST_BET,
                // next_bet : NEXT_BET,
                bet : BET,
                sum_net : SUM_NET,
                win : WIN,
                lose : LOSE,
                arr_step_length : ARR_STEP_length
            }
    
            return obj_res;
    
    
        }else{
            return 'n/a';
        }
    

    }else{
        console.log("Your target complete...");
        return 
    }
    
}

module.exports = {
    betting
}