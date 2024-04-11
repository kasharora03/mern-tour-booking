import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBTypography,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
// import Subtitle from "../../shared/Subtitle";

const TestimonialCarousel = () => {
    const testimonials = [
        {
            name: "Ramesh Kumar",
            role: "Traveler",
            imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png",
            quote:
                "Excellent service! The tour guides were very knowledgeable and friendly. I had a wonderful experience exploring India with this travel agency.",
            stars: 5,
        },
        {
            name: "Sunita Patel",
            role: "Explorer",
            imageSrc: "https://cdn-icons-png.flaticon.com/512/6833/6833591.png",
            quote:
                "I'm impressed with the professionalism of this travel agency. They customized my tour according to my preferences and made sure I had a memorable trip.",
            stars: 5,
        },
        {
            name: "Amit Singh",
            role: "Adventurer",
            imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png",
            quote:
                "Had an amazing time exploring the wildlife sanctuaries in India with this agency. The guides were experienced and made the safari unforgettable.",
            stars: 4,
        },
        {
            name: "Priya Sharma",
            role: "Nature Lover",
            imageSrc: "https://cdn-icons-png.flaticon.com/512/6833/6833591.png",
            quote:
                "I highly recommend this travel agency for anyone planning a trip to India. They provided excellent service and ensured a hassle-free experience.",
            stars: 5,
        },
        {
            name: "Ajay Verma",
            role: "History Enthusiast",
            imageSrc: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_people_person_avatar_white_tone_icon_159363.png",
            quote:
                "The historical tours organized by this agency exceeded my expectations. The guides were passionate about Indian history and shared fascinating insights.",
            stars: 5,
        },
    ];

    const chunkSize = 3;
    const chunkArray = (array, size) => {
        return array.reduce((chunks, item, i) => {
            if (i % size === 0) {
                chunks.push([item]);
            } else {
                chunks[chunks.length - 1].push(item);
            }
            return chunks;
        }, []);
    };

    const testimonialChunks = chunkArray(testimonials, chunkSize);

    return (
        <>
        <MDBContainer className="py-5">
        <h2 className='gallery_title tw-text-2xl md:tw-text-4xl yellow tw-italic'>Testimonials</h2>
            <MDBCarousel showControls dark>
                {testimonialChunks.map((chunk, index) => (
                    <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                        <MDBContainer>
                            <MDBRow className="text-center">
                                {chunk.map((testimonial, i) => (
                                    <MDBCol lg={12 / chunkSize} key={i} className="mb-5 mb-md-0">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img
                                                src={testimonial.imageSrc}
                                                className="rounded-circle shadow-1-strong"
                                                width="150"
                                                height="150"
                                                alt={`User ${i + 1}`}
                                            />
                                        </div>
                                        <h5 className="mb-3">{testimonial.name}</h5>
                                        <h6 className="yellow mb-3">{testimonial.role}</h6>
                                        <p className="px-xl-3">
                                            <MDBIcon fas icon="quote-left" className="pe-2" />
                                            {testimonial.quote}
                                        </p>
                                        <MDBTypography
  listUnStyled
  className="d-flex justify-content-center mb-0"
>
  {[...Array(testimonial.stars)].map((star, starIndex) => (
    <li key={starIndex}>
      <i class="ri-star-fill yellow"></i>
    </li>
  ))}
</MDBTypography>
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </MDBContainer>
                    </MDBCarouselItem>
                ))}
            </MDBCarousel>
        </MDBContainer>
        </>
    );
};

export default TestimonialCarousel;
