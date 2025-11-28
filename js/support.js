function openAI() {
  alert("AI assistant would open here!");
}

function openCategory(category) {
  console.log("Opening category:", category);
  alert(`Opening ${category} help articles...`);
}

function openHelp(topic) {
  console.log("Opening help topic:", topic);
  alert(`Opening help article for: ${topic}`);
}

function goToCommunity() {
  console.log("Going to community");
  alert("This would open the Spotify Community forum!");
}

// Search functionality
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" && this.value) {
      console.log("Searching for:", this.value);
      alert(`Searching for: ${this.value}`);
    }
  });
