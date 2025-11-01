document.getElementById("loginform").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.getElementById("role").value;
  const mail = document.getElementById("loginemail").value.trim();
  const pass = document.getElementById("loginpass").value;

  const mailerror = document.getElementById("loginemailerror");
  const passerror = document.getElementById("loginpasserror");

  mailerror.textContent = "";
  passerror.textContent = "";

  let valid = true;

  const emailPattern = /^[^\s@]+@srishakthi\.ac\.in$/;
  if (!emailPattern.test(mail)) {
    mailerror.textContent = "Invalid email format.";
    valid = false;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(pass)) {
    passerror.textContent = "Password must be at least 8 characters and include a number.";
    valid = false;
  }
  
  if (valid) {
     mailerror.textContent = "";
     passerror.textContent = "";
         if (role === "student") {
          window.location.href = "ins.html";
        } else if (role === "driver") {
          window.location.href = "driver.html";
        } else if (role === "admin") {
          window.location.href = "admin.html";
        }
      }
  }
);