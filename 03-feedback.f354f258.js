let e={};const t=document.querySelector(".feedback-form"),a=document.getElementById("email"),o=document.getElementById("message"),r=localStorage;if(t.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem("feedback-form-state"),a.value="",o.value="",localStorage.setItem("feedback-form-state",JSON.stringify(e))})),t.addEventListener("input",(function(t){e[t.target.name]=t.target.value,r.setItem("feedback-form-state",JSON.stringify(e))})),localStorage.getItem("feedback-form-state")){e=JSON.parse(localStorage.getItem("feedback-form-state"));for(const a in e){t.querySelector(`[name="${a}"]`).value=e[a]}}
//# sourceMappingURL=03-feedback.f354f258.js.map
