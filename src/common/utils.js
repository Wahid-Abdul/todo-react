// export const launch_toast = (message) => {
//     var x = document.getElementById("toast")
//     x.className = "show";
//     document.getElementById("desc").innerText = message
//     setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
// }

export const export2txt = (filename, jsonData ) => {
  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(jsonData, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", `${filename}.txt`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }