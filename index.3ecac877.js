var e=document.querySelector("button.append-row"),t=document.querySelector("button.remove-row"),l=document.querySelector("button.append-column"),n=document.querySelector("button.remove-column"),r=function(){var r=document.querySelector("table.field").querySelectorAll("tr"),o=r[0].querySelectorAll("td").length;e.disabled=r.length>=18,t.disabled=r.length<=2,l.disabled=o>=18,n.disabled=o<=2};e.addEventListener("click",function(e){var t=document.querySelector("table.field"),l=document.querySelectorAll("tr");if(l.length<18){var n=l[1].cloneNode(!0);t.append(n)}r()}),t.addEventListener("click",function(){var e=document.querySelectorAll("tr");e.length>2&&e[e.length-1].remove(),r()}),l.addEventListener("click",function(){document.querySelectorAll("tr").forEach(function(e){e.querySelectorAll("td").length<18&&e.append(document.createElement("td"))}),r()}),n.addEventListener("click",function(){document.querySelectorAll("tr").forEach(function(e){var t=e.querySelectorAll("td");t.length>2&&t[t.length-1].remove()}),r()}),r();
//# sourceMappingURL=index.3ecac877.js.map