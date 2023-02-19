document.getElementById("apply-bg").addEventListener("click", () => {
  const friends = document.querySelectorAll(".friend");
  friends.forEach((friend) => {
    friend.style.backgroundColor = "lightblue";
  });
});

document.getElementById("center-third").addEventListener("click", () => {
  const third = document.getElementById("third-frnd");
  third.style.textAlign = "center";
});

document.getElementById("add-new").addEventListener("click", () => {
  const friendContainer = document.getElementById("friends");

  const friend = document.createElement("div");
  friend.classList.add("friend");
  friend.innerHTML = `
    <h3 friend-mame">friend-6</h3>
    <p>Ducimus consectetur dignissimos veritatis vitae.</p>
    `;
  friendContainer.appendChild(friend);
});
