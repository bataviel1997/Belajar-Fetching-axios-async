import axios from "axios";

// buat sebuah function untuk mendapatkan data dengan Fetch
// 1
async function getUserData(){
  // 2
  let res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method : "GET",
    headers : {
      "Content-Type" : "application/json"
    }
  });
  // 3
  let data = await res.json(); //[...{}]
  let user_tbody = document.getElementById("user_tbody");
// 4
  data.forEach((e)=>{
    user_tbody.innerHTML += `
      <tr>
        <td>  ${e.id}  </td>
        <td>  ${e.username}  </td>
        <td>  ${e.email}  </td>
        <td>  ${e.address.city}  </td>
        <td>
          <button> Detail </button>
        </td>
      </tr>
    `
  });


  
}
// jalankan function getUserData
// getUserData();

// get data dengan axios
// 1
async function getUserData2(){
// 2
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  let data = await res.data;

  // 3
  let user_tbody = document.getElementById("user_tbody");
  // 4
  data.forEach((e)=>{
    user_tbody.innerHTML += `
      <tr>
        <td> ${e.id} </td>
        <td> ${e.username} </td>
        <td> ${e.email} </td>
        <td> ${e.address.city} </td>
        <td> 
          <button onclick="handleDetail(${e.id})"> Detail </button>
        </td>
      </tr>
    `
  });
}
// 5 jalankan function getUserData2
getUserData2();

/**
 * jalankan axios dgn fiture promise
 */
window.handleDetail = function(id){
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(res =>{
    let data = res.data;
    alert(`
username : ${data.username}
email : ${data.email}
city : ${data.address.city}
    `)
  })
}

/**
 * get data detail
 * jalankan axios dgn fiture async
 */
// 1
// window.handleDetail = async function(id){
// // 2
//   let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//   let data = await res.data;
//   alert(`
// Username  : ${data.username}
// Email     : ${data.email}
// Address   : ${data.address.city}
//   `)
// }
