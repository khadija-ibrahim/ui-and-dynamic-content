
let input = document.getElementById('content');
let add = document.getElementById('add');
let list = document.getElementById('list');


// Use textContent property on created list-item
// and assign it with the value of the text written in the text-field

function addItem() {
	
	input.value = input.value.trim();
		
		let li = document.createElement('li');
    if (input.value) {
        li.textContent = input.value;
        list.appendChild(li);
        input.value =  "";
        error.innerText="";
        
        } else {
            let feedback = alert('Nothing entered');
            let error = document.getElementById("error");
            error.innerText = "Please enter an item...";
            //feedback();
        }
    
}

add.addEventListener('click', addItem);