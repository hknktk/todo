{
// 追加ボタンを取得
 const button = document.getElementById('add-button');

//  追加ボタンのクリックイベント
 button.addEventListener('click', () => {

  
  //  入力内容の取得
   let input = document.getElementById('new-todo');
   let detail = document.getElementById('detail');

   if(input.value === ""){
    alert('タイトルを入力してください。');
    return;
  }


   
  //  入力内容を受け取るliを生成
   const li = document.createElement('li');
   li.innerText = input.value;


  //  上で生成したliを受け取るulを生成
  const ul = document.querySelector('ul');
  ul.appendChild(li);


  // 作られたすべてのliを配列として定義？
  const lists = document.querySelectorAll('li');
  [...lists].forEach((li) => {
    // すでに追加されている項目には詳細、追加ボタンは追加しないように条件分岐
    if(li.className !== 'todo-content done'  && li.className !== 'todo-content'){
      // 詳細ボタンと追加ボタンを生成
      let detailButton = document.createElement('div');
      let doneButton = document.createElement('div');
      
      // ボタンの中身とクラス名を追加
      detailButton.innerText = '詳細';
      li.appendChild(detailButton);
      detailButton.classList.add('detailButton');

      // 詳細ボタンのクリックイベント
      detailButton.addEventListener('click', () =>{

        if(li.className === "todo-content done"){
          return;
        }

        detailText.classList.toggle('active');

       

        // 詳細ボタンの中身を条件分岐で書き換え
        if(detailButton.innerHTML === '詳細'){
          detailButton.innerHTML = '戻る';
        }else{
          detailButton.innerHTML = '詳細';
        }
      })
      
      // 完了ボタンの中身を追加し、liの子要素として追加
    doneButton.innerText = '完了';
    doneButton.classList.add('doneButton')
    li.appendChild(doneButton);



    //  詳細フォームの中身をpタグに入れ、完了ボタンの次に挿入
   let detail = document.getElementById('detail');
   const detailText = document.createElement('p');
   detailText.innerText = detail.value;
   if(detail.value === ""){
    detailText.innerText = "詳細は設定されていません。";
  }
   doneButton.after(detailText);

   

 

  //  完了ボタンのクリックイベント
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


  // 最後に、生成されたliにクラス名を付与。このクラスの有無で完了、詳細ボタンの生成を条件分岐するので最後に書く。
  li.classList.add('todo-content');

  // フォームの中身を空にし次の入力を受ける準備
  input.value = "";
  detail.value = "";

  

 })


}


