{

 const button = document.getElementById('add-button');

 button.addEventListener('click', () => {
   let input = document.getElementById('new-todo');
   let detail = document.getElementById('detail');
   
   const li = document.createElement('li');
   li.innerText = input.value;

  const ul = document.querySelector('ul');
  ul.appendChild(li);


  
  const lists = document.querySelectorAll('li');
  [...lists].forEach((li) => {
    if(li.className !== 'todo-content'){

      let detailButton = document.createElement('button');
      let doneButton = document.createElement('button');
      
      detailButton.innerText = '詳細';
      li.appendChild(detailButton);
      detailButton.classList.add('detailButton');
      detailButton.addEventListener('click', () =>{
        detailText.classList.toggle('active');
      })
      
      
    doneButton.innerText = '完了';
   li.appendChild(doneButton);

   let detail = document.getElementById('detail');
   const detailText = document.createElement('p');
   detailText.innerText = detail.value;
   doneButton.after(detailText);

   doneButton.addEventListener('click' , () =>{
    const li = doneButton.closest('li');
    li.classList.toggle('done');
    
    if(doneButton.innerHTML === '完了'){
    doneButton.innerHTML = ('未了');
  }else{
    doneButton.innerHTML = '完了';
  }
  
  
})

}else{
  return;
}

  })


  li.classList.add('todo-content');

  input.value = "";
  detail.value = "";

 })


}


