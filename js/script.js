document.addEventListener("DOMContentLoaded", (e)=>
{
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    const testimonialContainer = document.querySelector("#testimonialContainer");
    const testimonials = document.querySelectorAll("[data-testimonial]");
    const sliderDots = document.querySelectorAll("[data-control-dot]")

    testimonialContainer.addEventListener("scroll",()=>
    {
        const containerPosition = testimonialContainer.getBoundingClientRect().x
        const testimonialsPosition = [...testimonials].map(testimonial => testimonial.getBoundingClientRect().x);
        const testimonialIndex = testimonialsPosition.indexOf(containerPosition);
        if(testimonialIndex >= 0 )
        {
            sliderDots.forEach(dot=>{
                if(dot.classList.contains("bg-brightRed")){
                    dot.classList.remove("bg-brightRed");
                }
            })
            sliderDots[testimonialIndex].classList.add("bg-brightRed");
        }
    })
    sliderDots.forEach((dot, index)=>
        {
            dot.addEventListener("click", ()=>
            {
                testimonials[index].scrollIntoView({ behavior: "smooth",  inline: "start", block: "nearest" })
            })
        })
    btn.addEventListener("click", ()=>
    {
        btn.classList.toggle("open")
        nav.classList.toggle("flex")
        nav.classList.toggle("hidden")
    })
})