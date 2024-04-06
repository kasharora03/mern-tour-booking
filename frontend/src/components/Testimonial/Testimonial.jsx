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
            name: "NAME 1",
            role: "User",
            imageSrc: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            stars: 2,
        },
        {
            name: "Name 2",
            role: "User",
            imageSrc: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            stars: 2,
        },
        {
            name: "Name 3",
            role: "User",
            imageSrc: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            stars: 5,
        },
        {
            name: "Name 4",
            role: "User",
            imageSrc: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            stars: 5,
        },
        {
            name: "Name 5",
            role: "User",
            imageSrc: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
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
        <h4 className='mainhead'>Testimonial</h4>
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
