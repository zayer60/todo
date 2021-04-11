document.addEventListener('DOMContentLoaded',function(){

    var input=document.querySelector('#task');
    var submit=document.querySelector('#submit');

    submit.disabled=true;

    input.onkeyup = ()=>{
        if (input.value.length>0){
            submit.disabled=false;
        }
        else{
            submit.disabled=true;
        }
    }

    document.querySelector('form').onsubmit = function(){
        var task= input.value;
        var lists = document.createElement('li');
        lists.innerHTML = task;
        document.querySelector('#tasks').appendChild(lists);
        
        input.value='';
        
        submit.disabled=true;
        return false;
    }

})