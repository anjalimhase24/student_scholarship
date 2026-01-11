

document.getElementById("scholarshipForm").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    fullName: fullName.value,
    gender: gender.value,
    dob: dob.value,
    aadhar: aadhar.value,
    category: category.value,
    course: course.value,
    year: year.value,
    college: college.value,
    income: income.value,
    scholarshipName: scholarshipName.value,
    account: account.value,
    ifsc: ifsc.value,
    address: address.value
  };

  fetch("http://localhost:5000/api/application/apply",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "auth-token": localStorage.getItem("token")
    },
    body: JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(()=>{
    alert("Application Submitted Successfully");
    window.location.href="student-dashboard.html";
  });
});
