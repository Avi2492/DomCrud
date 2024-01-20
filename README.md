```JavaScript
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// const title = document.querySelector("#title");

// fetch(apiUrl)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((item) => {
//       const p = document.createElement("p");
//       p.textContent = item.title;
//       title.appendChild(p);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function fetchData(){
  try{
    const res = await fetch(apiUrl);
    if(!res.ok){
      throw new Error("Network response was not ok");
    }
    const data = await res.json();

    const filterData = data.filter((item) => (item.userId === 1 || item.userId === 3));
    console.log(filterData);
    // filterData.map((item)=>{
    //   const p = document.createElement("h3");
    //   p.textContent = `Title: ${item.title}`;
      
    //   title.appendChild(p);
    // });
    showInCard(filterData);
  }catch(error){
    console.log(error);
  }
}

function showInCard(filterData){
  const cardContainer = document.getElementById("cardContainer");

  cardContainer.innerHTML = '';

  filterData.map((item)=>{
    const card = document.createElement('div');
    card.classList = 'card';

    card.innerHTML = `
      <h3>Title: ${item.title}</h3>
      <p>UserId: ${item.userId}</p>
      <p>Body: ${item.body}</p>
      `;

    cardContainer.appendChild(card);
  });
}

fetchData();

```
