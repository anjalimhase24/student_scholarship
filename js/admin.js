const adminToken = localStorage.getItem("adminToken");
if(!adminToken){
  alert("Admin login required");
  window.location.href="admin-login.html";
}

let applications = [];

// Load all applications
fetch("http://localhost:5000/api/application/all",{
  headers:{ "admin-token": adminToken }
})
.then(res=>res.json())
.then(data=>{
  applications = data;
  renderTable(applications);
});

function renderTable(data){
  const tbody = document.getElementById("adminTable");
  tbody.innerHTML = "";

  if(data.length===0){
    tbody.innerHTML = `
      <tr>
        <td colspan="7">No records found</td>
      </tr>
    `;
    return;
  }

  data.forEach((app,i)=>{
    tbody.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${app.studentName}</td>
        <td>${app.email}</td>
        <td>${app.scholarshipName}</td>
        <td>${app.year}</td>
        <td class="status-${app.status}">${app.status}</td>
        <td>
          <button onclick="updateStatus('${app._id}','Approved')">
            Approve
          </button>
          <button onclick="updateStatus('${app._id}','Rejected')">
            Reject
          </button>
        </td>
      </tr>
    `;
  });
}

// Filter by status
function filterData(){
  const status = document.getElementById("filterStatus").value;
  if(status==="All"){
    renderTable(applications);
  }else{
    const filtered = applications.filter(a=>a.status===status);
    renderTable(filtered);
  }
}

// Update status
function updateStatus(id,status){
  fetch(`http://localhost:5000/api/application/update/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "admin-token": adminToken
    },
    body: JSON.stringify({status})
  })
  .then(()=>location.reload());
}

function logout(){
  localStorage.clear();
  window.location.href="admin-login.html";
}
