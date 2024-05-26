const submitName=(event)=>{
    event.preventDefault();
    
    const name_input=document.getElementById('nm_input').value;
    const ch_arr=name_input.split("");
    console.log(ch_arr)
    const rev_ch_arr=ch_arr.reverse();
    const rev_nam=rev_ch_arr.join("");
    console.log(rev_nam)
    document.getElementById("rev_nm").innerHTML=rev_nam


}