document.getElementById("vipForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const telegram = document.getElementById("telegram").value.trim();
  const transaction = document.getElementById("transaction").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && telegram && transaction) {
    fetch("https://script.google.com/macros/s/AKfycbzPkpUtU_lSCevbC4tc3o2aOK_MZaxMI_vNk7U0FF7wLq-UXNG5DoNaY3-1Nh2naPZjUQ/exec", {
      method: "POST",
      body: JSON.stringify({ name, email, telegram, transaction, message }),
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      alert("✅ Thank you, " + name + "! Your registration has been successfully submitted.\nYou can now join the VIP Telegram group.");
      document.getElementById("vipForm").reset();
      document.getElementById("telegramLink").style.display = "block";
    })
    .catch(err => {
      alert("❌ Something went wrong. Please try again.");
      console.error(err);
    });

  } else {
    alert("❌ Please fill out all required fields.");
  }
});