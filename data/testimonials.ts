export interface Testimonial {
  id: string;
  name: string;
  university: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Jenkins",
    university: "University of Toronto, Canada",
    quote:
      "EduVoyage made my dream of studying in Canada a reality. Their team guided me through every step of the admission and visa process seamlessly.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEXDdr409zsaPK9L_qNaRgKVDUYl-2w2rJ3YG_7Apqb_Nylb5RGKtfZ2RolvgDTACXwTCHMn506BKiqYYMhYCCP0QCGUNbnQwDcl9s8MFZcxtBtnPEZRniirB4xOV4VrqENRPlk_n7SHfgwSMRKi36m3I0dY6GgX7CB8jbBcpa9g1j9mUVEnD1UCOJUFpGFXD6HxG47Z56Lf4MW8ucmQiQ0IioCdAeL7GwiA76sIpAqKj8_BWbyZqD",
  },
  {
    id: "testimonial-2",
    name: "Ahmed Khan",
    university: "Oxford University, UK",
    quote:
      "The counselors at SAK are incredibly knowledgeable. They helped me secure a scholarship that covered 50% of my tuition fees.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBN8_lmnh9wvjiOJJtNqOYhW5d1s5M4TwJhgYK8GXDMsVIuprWQ9pvl_AI1CaBNNAC5QSxx6vI3kY2bhyczqPelBZwxkqIal1XniZ7QjLehrq7_HptGCGwx69LIZ0SzQ54CQZadISjt46OWaiST1a_QPRlsveiPvhSwVOypJoZ6tXMYlwfTqXmqA2kwnJ-dh0dfjVEMZrcqOsCNpilfCZq7XNwf6SgiHewkK8KptB8sxDn4K3iQY4BS",
  },
  {
    id: "testimonial-3",
    name: "Elena Rodriguez",
    university: "NYU, USA",
    quote:
      "From shortlisting universities to pre-departure briefing, the support was outstanding. Highly recommend their services to anyone planning to study abroad.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAguQp_R54IfXhBS8WWmtm8yhOM7qLhYqUI3RyGTdTD589GygwFfWcdTd8L8VJSyZQqonhYL7JDd22A50LwM_Vnwz16TSwQMLZCRlSgddWSWddg8w4x0McdagEl8Sg7cBFZJfzrPUPizMUs2UwEIuqJtFxY8UD1SWooH2rlDC_o08ahzaMjJmZ1MzK3MqVTVfh5W_M9-DdcfEsT8HbB704wsOCgnwEzU7HLOs46aQ0IdGXrYL4yEKxK",
  },
];

export default testimonials;
