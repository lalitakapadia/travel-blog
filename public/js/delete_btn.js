
const deletBtn= document.querySelectorAll("#remove_Btn")

for (let i=0; i< deletBtn.length; i++)
{
    deletBtn[i].addEventListener("click",async function(event){
    
        //console.log(event.target.firstElementChild)
        let id=parseInt(event.target.dataset.id)
        console.log(id)
        const response = await fetch(`/api/recommendation/${id}`, {
          method: 'DELETE',
        });

      if (response.ok) {
        await fetch(`/api/recommendation/recomJson/${request.getSession().getAttribute("country").toString()}`, {
          method: 'GET',
        });
        
        //document.location.replace(`/api/recommendation/recomJson/${request.getSession().getAttribute("country").toString()}`);
      } else {
        alert('Failed to delete recommendation');
      }

    });
}


// const updateBtns = document.querySelectorAll("#edit_Btn");

// for (let i = 0; i < updateBtns.length; i++) {

//   updateBtns[i].addEventListener("click", async function(event) {

//     console.log(event.target);

//     let id = parseInt(event.target.dataset.id);

//     console.log(id);

//     const postedData = {
     
//     };

//     const response = await fetch(`/api/recommendation/${id}`, {
//       method: 'PUT',  
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(postedData) 
//     });

//     if(response.ok) {
//       document.location.replace("/recommendations"); 
//     } else {
//       alert("Failed to update recommendation");
//     }

//   });

// }
