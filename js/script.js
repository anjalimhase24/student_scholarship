document.addEventListener("DOMContentLoaded", () => {

  // Dynamic Scholarships
  const scholarships = [
    {title:"Mahindra Talent Scholarship", amount:"₹10,000", deadline:"31 Dec 2025"},
    {title:"PM Scholarship Scheme", amount:"₹30,000", deadline:"15 Jan 2026"},
    {title:"NSP Merit-Cum-Means", amount:"₹40,000", deadline:"28 Feb 2026"},
    {title:"Smart Student Excellence", amount:"₹20,000", deadline:"30 Mar 2026"},
  ];

  const schContainer = document.getElementById("scholarshipCards");
  scholarships.forEach(s=>{
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML=`<h3>${s.title}</h3><p>Amount: ${s.amount}</p><p>Deadline: ${s.deadline}</p>`;
    schContainer.appendChild(card);
  });

  // Dynamic Testimonials Slider
  const testimonials = [
    {text:"This platform helped me find scholarships I didn’t know existed!", name:"- Anjali M."},
    {text:"Easy application process and quick updates. Highly recommended.", name:"- Rahul S."},
    {text:"Saved me time and helped me track all applications in one place.", name:"- Priya S."},
  ];

  const testContainer = document.getElementById("testimonialCards");
  let idx = 0;

  const showTestimonial = () => {
    testContainer.innerHTML = "";
    const t = testimonials[idx];
    const div = document.createElement("div");
    div.className="testimonial";
    div.innerHTML=`<p>"${t.text}"</p><span>${t.name}</span>`;
    testContainer.appendChild(div);
    idx = (idx+1) % testimonials.length;
  }

  showTestimonial();
  setInterval(showTestimonial, 4000);

});
