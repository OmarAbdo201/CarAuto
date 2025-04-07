const Testimonials = [
  {
    Image: "Imgs/BMW 3.jfif",
    name: "BMW 3",
    info: "The BMW 3 Series is a compact sports sedan that blends excellent performance with a refined design. Known for its responsive handling and a variety of engine options, the 3 Series is ideal for those looking for a dynamic driving experience without compromising comfort.",
    data: "October 2, 2018",
  },
  {
    Image: "Imgs/BMW 7.jfif",
    name: "BMW 7",
    info: "The BMW 7 Series is the epitome of luxury and advanced technology. This flagship sedan offers unmatched comfort with high-end features and a smooth driving experience. It combines powerful engine options with cutting-edge tech and a luxurious interior.",
    data: "April 23, 2022",
  },
  {
    Image: "Imgs/BMW M5.jfif",
    name: "BMW M5",
    info: "The BMW M5 is a high-performance sports sedan that features a 4.4-liter V8 twin-turbocharged engine, delivering an impressive 617 horsepower. Known for its exceptional speed and dynamic handling, the M5 is perfect for those who seek both luxury and thrilling performance.",
    data: "February 20, 2017",
  },
  {
    Image: "Imgs/BMW XM.jfif",
    name: "BMW XM",
    info: "The BMW XM is a luxury performance SUV that combines electric and hybrid technology, offering both thrilling speed and fuel efficiency. With its modern design and advanced features, the XM is ideal for those seeking both an eco-friendly option and top-tier performance.",
    data: "April 3, 2023",
  },
];

const TestimonialsContainer = document.getElementById("testimonials-container");
const perviousBtn = document.getElementById("pervious");
const NextBtn = document.getElementById("next");

function MakeHTMLCard(data) {
  return `<div class="test-card">
    <img src="${data.Image}" alt="personal photo">
    <h3>${data.name}</h3>
    <p>${data.info}</p>
    <p>${data.data}</p>    
    </div>`;
}

let currentTestimonial = 0;

const NextTestimonial = () => {
  if (currentTestimonial < Testimonials.length - 1) {
    currentTestimonial += 1;
  }
  UpdatePage();
};

const PreviousTestimonial = () => {
  if (currentTestimonial > 0) {
    currentTestimonial -= 1;
  }
  UpdatePage();
};

NextBtn.addEventListener("click", NextTestimonial);
perviousBtn.addEventListener("click", PreviousTestimonial);

const UpdatePage = () => {
  let markup = MakeHTMLCard(Testimonials[currentTestimonial]);
  TestimonialsContainer.innerHTML = markup;
};
UpdatePage();
