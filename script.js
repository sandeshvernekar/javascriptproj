var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

// graph      ke liye lekin pura code utha ke copy paste karne ki jagah khud ek baar banane ka try karna, kuch naya seekhne ko milega!
















// fil





document.getElementById("add-row").addEventListener("click", function() {
  var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.rows.length);
  
  var inputs = document.querySelectorAll("#data-form input");
  for (var i = 0; i < inputs.length; i++) {
      var cell = newRow.insertCell(i);
      cell.innerHTML = inputs[i].value;
  }
  
  // Clear input fields after adding a row
  for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
  }
});

document.getElementById('state-filter').addEventListener('change', function() {
      var selectedState = this.value;
      filterTable(selectedState);
      updateChart(selectedState);
  });

  function filterTable(state) {
      var rows = document.querySelectorAll('#data-table tbody tr');
      rows.forEach(function(row) {
          var stateCell = row.cells[3];
          if (state === '' || stateCell.textContent.toUpperCase() === state.toUpperCase()) {
              row.style.display = '';
          } else {
              row.style.display = 'none';
          }
      });
  }

 

  function getChartData(selectedState) {
      var stateLabels = ['Uttar Pradesh', 'Kerala', 'Uttarakhand', 'Maharashtra', 'Punjab', 'Tamil Nadu', 'Telangana', 'Haryana', 'Andhra Pradesh', 'Karnataka', 'Gujarat', 'Rajasthan', 'Delhi', 'Manipur', 'West Bengal'];
      var stateData = [2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      if (selectedState !== '') {
          var selectedIndex = stateLabels.indexOf(selectedState);
          stateLabels = [selectedState];
          stateData = [stateData[selectedIndex]];
      }

      return {
          labels: stateLabels,
          datasets: [{
              label: 'Number of Societies',
              data: stateData,
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      };
  }
