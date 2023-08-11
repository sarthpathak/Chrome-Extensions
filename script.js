// selectors
const hamburger = document.querySelector(".hamburger");
const back = document.querySelector(".menu-back");
const goTop = document.querySelector(".goTop");
let projectContainer = document.querySelector(".projects");
const header = document.querySelector("nav");

// initalise aos animation library
AOS.init();

// scroll effects
goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

addEventListener("scroll", () => {
  if (window.scrollY > 300) goTop.classList.add("hide");
  else goTop.classList.remove("hide");
});

// hamburger menu

hamburger.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});
back.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});

// css variables
let planet = document.querySelector("#mode ion-icon");

function LoadCheck(){
  if (localStorage.getItem("mode") === "dark") {
    isDark = true;
    set_dark();
    planet.style.color = "rgb(184, 184, 76)";
  }
}


var isDark = false;
var r = document.querySelector(":root");
const mode = document.querySelector("#mode");
mode.addEventListener("click", () => {
  if (isDark) {
    set_light();
    isDark = false;
    planet.style.color = "#46244c";
    localStorage.setItem("mode", "light");
  } else {
    isDark = true;
    set_dark();
    planet.style.color = "rgb(184, 184, 76)";
    localStorage.setItem("mode", "dark");
  }
});
function set_light() {
  r.style.setProperty("--header", "#46244c");
  r.style.setProperty("--text", "#712b75");
  r.style.setProperty("--button", "#c74b50");
  r.style.setProperty("--hover", "#d49b54");
  r.style.setProperty("--shad", "rgb(209, 208, 208)");
  r.style.setProperty("--navColor", "rgba(250, 250, 250, 0.9)");
  r.style.setProperty("--dark-yellow", "#c27a23");
  r.style.setProperty("--body", "white");
}
function set_dark() {
  r.style.setProperty("--header", "rgba(250, 250, 250, 0.9)");
  r.style.setProperty("--text", "#712b75");
  r.style.setProperty("--button", "#712b75");
  r.style.setProperty("--hover", "#d49b54");
  r.style.setProperty("--navColor", "rgba(0, 0, 0, 0.9)");
  r.style.setProperty("--shad", "black");
  r.style.setProperty("--dark-yellow", "#c27a23");
  r.style.setProperty("--body", "black");
}

LoadCheck();

// projects
let projectData = [

  {
    projectName: "Binary_To_Decimal_converter",
    projectImage: "Binary_To_Decimal_converter/images/logo.png",
    projectUrl: "Binary_To_Decimal_converter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Binary_To_Decimal_converter",
  },
  {
    projectName: "QR-Generator",
    projectImage: "./Emoji-rating/qr.png",
    projectUrl: "QR-Generator/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/QR-Generator",
  },
  {
    projectName: "URL-shortener",
    projectImage: "./Emoji-rating/url.png",
    projectUrl: "URL-shortener/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/URL-shortener",
  },
  {
    projectName: "Income-Tax CALCULATOR",
    projectImage: "URL-shortener/images/workingimage.png",
    projectUrl: "./IT_Income_Tax_Calculator/it.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/URL-shortener",
  },
  {
    projectName: "Key-codes",
    projectImage: "https://images.unsplash.com/photo-1560457079-9a6532ccb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    projectUrl: "./KeyCodes/Index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/URL-shortener",
  },
  {
    projectName: "Weather app",
    projectImage: "./Emoji-rating/weather.jpg",
    projectUrl: "Weather-app/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Weather-app",
  },

  {
    projectName: "rgb to hex convertor",
    projectImage: "./Emoji-rating/rgb.jpg",
    projectUrl: "rgb-to-hex-convertor/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/rgb-to-hex-convertor",
  },
  {
    projectName: "Books_Recommendation",
    projectImage: "Books_Recommendation/book.jpg",
    projectUrl: "Books_Recommendation/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Books_Recommendation",
  },
  {
    projectName: "Calculate Age",
    projectImage: "CalculateAge/logo.png",
    projectUrl: "CalculateAge/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Calculate%20Age",
  },
  {
    projectName: "Movies_Recommendation",
    projectImage: "./Emoji-rating/movie.jpg",
    projectUrl: "Movies_Recommendation/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Movies_Recommendation",
  },
  
  

  {
    projectName: "BMI-Calculator",
    projectImage: "BMI-Calculator/BMIExtentionWorkingImages/BMIextention.png",
    projectUrl: "BMI-Calculator/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/BMI-Calculator",
  },
  {
    projectName: "Calculator",
    projectImage: "./Emoji-rating/calci.jpg",
    projectUrl: "calculator/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/calculator",
  },
  {
    projectName: "Code-Launcher",
    projectImage: "Code-Launcher/images/Code-Aider-image.png",
    projectUrl: "Code-Launcher/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Code-Launcher",
  },
  {
    projectName: "Coin-toss",
    projectImage: "Coin-toss/Coin-Toss-Images.png",
    projectUrl: "Coin-toss/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Coin-toss",
  },
  {
    projectName: "Color Picker",
    projectImage: "ColorPicker/color-picker-image.png",
    projectUrl: "Color Picker/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Color%20Picker",
  },
 
  {
    projectName: "Decimal_Hexadecimal_Converter",
    projectImage:
      "Decimal_Hexadecimal_Converter/Decimal-Hexadecimal-Convertor-image.png",
    projectUrl: "Decimal_Hexadecimal_Converter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Decimal_Hexadecimal_Converter",
  },
 
  {
    projectName: "Height-Conversion-tool",
    projectImage: "Height-Conversion-tool/Height-Conversion-Tool-Image.png",
    projectUrl: "Height-Conversion-tool/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Height-Conversion-tool",
  },
  
  
  {
    projectName: "TIC-TAC-TOE",
    projectImage: "./Emoji-rating/tic.png",
    projectUrl: "TIC-TAC-TOE/double.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/TIC-TAC-TOE",
  },
  {
    projectName: "Weight conversion tool",
    projectImage: "./Emoji-rating/weight.jpg",
    projectUrl: "Weight conversion tool/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Weight%20conversion%20tool",
  },

  {
    projectName: "Roots_Quadratic_Eqn",
    projectImage: "./Emoji-rating/quadratic.png",
    projectUrl: "Roots_Quadratic_Eqn/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Roots_Quadratic_Eqn",
  },
  {
    projectName: "Quotes_Extension",
    projectImage: "./Emoji-rating/quotes.jpg",
    projectUrl: "Quotes_Extensionpopup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Quotes_Extension",
  },
  {
    projectName: "Paragarph Generator",
    projectImage: "./Emoji-rating/para.jpg",
    projectUrl: "Paragrph Generator/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Paragrph%20Generator",
  },
  {
    projectName: "Library_Website",
    projectImage: "Library_Website/nn.png",
    projectUrl: "Library_Website/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Library_Website",
  },
  {
    projectName: "Guess_Emoji",
    projectImage: "Guess_Emoji/images/1.jpg",
    projectUrl: "Guess_Emoji/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Guess_Emoji",
  },
  {
    projectName: "Fahrenheit_Celsius_Converter",
    projectImage: "Fahrenheit_Celsius_Converter/f-to-c.png",
    projectUrl: "Fahrenheit_Celsius_Converter/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Fahrenheit_Celsius_Converter",
  },
  {
    projectName: "Dragon_Adventures_Game",
    projectImage: "Dragon_Adventures_Game/bg.png",
    projectUrl: "Dragon_Adventures_Game/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dragon_Adventures_Game",
  },
  {
    projectName: "digital_clock",
    projectImage: "./Emoji-rating/digital.jpg",
    projectUrl: "digital_clock/index.html",
    projectDownload: "",
  },
  {
    projectName: "Dictionary_Extension",
    projectImage: "Dictionary_Extension/dictonary_extension.png",
    projectUrl: "Dictionary_Extension/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dictionary_Extension",
  },
  {
    projectName: "Dictionary",
    projectImage: "Dictionary/logo.png",
    projectUrl: "Dictionary/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Dictionary",
  },
  {
    projectName: "Country_Currency",
    projectImage: "Country_Currency/bg.jpg",
    projectUrl: "Country_Currency/popup.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Country_Currency",
  },
  {
    projectName: "Cheatsheet_Template",
    projectImage: "Cheatsheet_Template/copy.png",
    projectUrl: "Cheatsheet_Template/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Cheatsheet_Template",
  },
  {
    projectName: "Analog_Clock",
    projectImage: "Analog_Clock/clock.png",
    projectUrl: "Analog_Clock/index.html",
    projectDownload:
      "https://downgit.github.io/#/home?url=https://github.com/ridsuteri/Awesome-Chrome-Extensions/tree/main/Analog_Clock",
  },
];

var projectDetails = projectData.slice(0);
projectDetails.sort(function (a, b) {
  var x = a.projectName.toLowerCase();
  var y = b.projectName.toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
});

window.addEventListener("load", getProjects());

function getProjects() {
  var output = "";
  projectDetails.forEach(
    (data, item) =>
      (output += `
      <div class="aos" data-aos="fade-up" data-aos-once="true">
      <div class="projectCard">
      <a href=${data.projectUrl} class="hoverEffect" target="_blank">
      <img
      class="projectCardImg"
      src=${data.projectImage}
      alt="Project Image"
      /></a>
      <h3 class="projectCardTitle">${data.projectName} </h3>
      <a href=${data.projectDownload} download="extension" target="_blank">
      <button class="btn projectCardDownload" type="button">Download<i class="fa fa-download" style="font-size:24px"></i></button>
      </a>
    </div>
    </div>
    `)
  );
  projectContainer.innerHTML = output;
}

// // Search function starts
let searchForm = document.querySelector(".search");
let searchBtn = document.querySelector(".search button");
let searchInput = document.querySelector(".search input");
let searchText = "";

searchInput.addEventListener("change", (e) => {
  searchText = e.target.value;
  display();
});

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  display();
});

function display() {
  var filterData = [];
  if (searchText.length !== 0) {
    projectData.forEach((obj) => {
      if (obj.projectName.toLowerCase().includes(searchText.toLowerCase())) {
        filterData.push(obj);
      }
    });
  } else {
    filterData = [...projectData];
  }
  let filter = "";
  if (filterData.length === 0) {
    filter = "<h2>No search results...</h2>";
  } else {
    filterData.forEach(
      (data, item) =>
        (filter += `
        <div class="aos" data-aos="fade-up" data-aos-once="true">
        <div class="projectCard">
        <a href=${data.projectUrl} class="hoverEffect" target="_blank">
        <img
        class="projectCardImg"
        src=${data.projectImage}
        alt="Project Image"
        /></a>
        <h3 class="projectCardTitle">${data.projectName} </h3>
        <a href=${data.projectDownload} download="extension" target="_blank">
        <button class="btn projectCardDownload" type="button">Download<i class="fa fa-download" style="font-size:24px"></i></button>
        </a>
      </div>
      </div>
    `)
    );
  }
  projectContainer.innerHTML = filter;
}
