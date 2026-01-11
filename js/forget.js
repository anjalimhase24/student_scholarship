// ===== PASSWORD MATCH FOR REGISTER PAGE =====
document.addEventListener("DOMContentLoaded", ()=>{

  // Register validation
  const pass = document.getElementById("pass");
  const cpass = document.getElementById("cpass");
  const msg = document.getElementById("matchText");
  if(cpass){
    cpass.addEventListener("input", ()=>{
      if(pass.value === cpass.value){
        msg.textContent = "✔ Password Matched";
        msg.style.color = "green";
      } else {
        msg.textContent = "✖ Password Not Matching";
        msg.style.color = "red";
      }
    });
  }

  // Login form logic (demo only)
  const loginForm = document.getElementById("loginForm");
  if(loginForm){
    loginForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      alert("Login Successful (backend connect later)");
    });
  }

  // Forgot password
  const fpForm = document.getElementById("forgotForm");
  if(fpForm){
    fpForm.addEventListener("submit",(e)=>{
      e.preventDefault();
      alert("Reset password link sent to your email.");
    });
  }
});
