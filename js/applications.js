// Login check
if(!localStorage.getItem("token")){
  alert("Please login first");
  window.location.href = "login.html";
}

// Fetch all applications of logged-in student
fetch("http://localhost:5000/api/application/my-applications",{
  headers:{
    "auth-token": localStorage.getItem("token")
  }
})
.then(res => res.json())
.then(data => {

  const tbody = document.getElementById("applicationData");

  if(data.length === 0){
    tbody.innerHTML = `
      <tr>
        <td colspan="6">No applications found</td>
      </tr>
    `;
    return;
  }

  data.forEach((app,index)=>{
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${app.scholarshipName}</td>
        <td>${app.year}</td>
        <td>${app.category || "-"}</td>
        <td class="status-${app.status}">
          ${app.status}
        </td>
        <td>${new Date(app.appliedAt).toLocaleDateString()}</td>
      </tr>
    `;
  });
})
.catch(()=>{
  alert("Server not responding");
});
