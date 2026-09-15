const menu=document.getElementById("menu");
const nav=document.getElementById("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const sections=[...document.querySelectorAll("main section")];
const links=[...document.querySelectorAll("#nav a")];
window.addEventListener("scroll",()=>{
  let current="home";
  sections.forEach(section=>{
    if(window.scrollY >= section.offsetTop-130) current=section.id;
  });
  links.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+current));
});

function sendMail(e){
  e.preventDefault();
  const name=document.getElementById("name").value;
  const email=document.getElementById("email").value;
  const message=document.getElementById("message").value;
  const subject=encodeURIComponent("Portfolio Contact from "+name);
  const body=encodeURIComponent("Name: "+name+"\nEmail: "+email+"\n\n"+message);
  location.href=`mailto:sureshmsureshm417@gmail.com?subject=${subject}&body=${body}`;
}
