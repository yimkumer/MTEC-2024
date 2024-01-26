import React from "react";
import image from "./back.jpeg";

const HomePage = () => {
  return (
    <>
      <div
        data-elementor-type="wp-page"
        data-elementor-id={37}
        className="elementor elementor-37"
      >
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-bb0eb96 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
          data-id="bb0eb96"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-no">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-afd4703"
              data-id="afd4703"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-5cfe129 elementor-widget elementor-widget-rt-eventbanner1"
                  data-id="5cfe129"
                  data-element_type="widget"
                  data-widget_type="rt-eventbanner1.default"
                >
                  <div className="elementor-widget-container">
                    {/*=====================================*/}
                    {/*=      Hero Section Area Start      =*/}
                    {/*=====================================*/}
                    <div
                      className="hero-wrap-layout1"
                      style={{ backgroundImage: `url(${image})` }}
                    >
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-9">
                            <div className="hero-box-layout1 has-animation">
                              <div className="shape-box">
                                <svg
                                  width={151}
                                  height={23}
                                  viewBox="0 0 151 23"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M119.439 6.03224L119.411 6.00196L119.382 5.97286C117.743 4.33397 115.036 4.22956 113.387 6.03117L100.004 20.3934C99.9313 20.4599 99.8719 20.4681 99.8482 20.4681C99.8338 20.4681 99.8264 20.4654 99.8239 20.4643C99.823 20.4639 99.8162 20.4614 99.8036 20.4475L99.7953 20.4384L99.7869 20.4294L86.3634 6.02362L86.3393 5.9978L86.3144 5.97286C84.6747 4.33323 81.9658 4.22947 80.3173 6.03361C80.3148 6.03631 80.3124 6.03901 80.3099 6.04172L66.8991 20.5154L66.8927 20.5224L66.8863 20.5294C66.8846 20.5313 66.8813 20.5348 66.8707 20.5392C66.8581 20.5446 66.8372 20.55 66.811 20.55C66.7848 20.55 66.764 20.5446 66.7513 20.5392C66.7407 20.5348 66.7374 20.5313 66.7357 20.5294L66.7294 20.5224L66.7229 20.5154L53.3121 6.04172C53.3097 6.03898 53.3072 6.03625 53.3047 6.03352C51.6938 4.27122 48.8604 4.27122 47.2495 6.03351L33.8313 20.5154L33.8248 20.5224L33.8184 20.5294C33.8167 20.5313 33.8134 20.5348 33.8028 20.5392C33.7902 20.5446 33.7694 20.55 33.7432 20.55C33.7169 20.55 33.6961 20.5446 33.6835 20.5392C33.6729 20.5348 33.6696 20.5313 33.6679 20.5294L33.6615 20.5224L33.655 20.5154L20.2368 6.03352C18.6263 4.27166 15.7939 4.27122 14.1829 6.03219L2.35542 18.7569C2.28258 18.8229 2.22335 18.8311 2.19975 18.8311C2.18538 18.8311 2.17794 18.8284 2.17543 18.8273L2.1753 18.8273C2.174 18.8267 2.16733 18.8239 2.15515 18.8105L2.12314 18.7753L2.08949 18.7416C2.05103 18.7032 2 18.6155 2 18.4779C2 18.3403 2.05103 18.2526 2.08949 18.2142L2.11553 18.1881L2.14059 18.1611L17.0844 2.07412C17.1571 2.00817 17.2163 2 17.2399 2C17.2543 2 17.2617 2.00273 17.2642 2.00382L17.2644 2.00387C17.2657 2.00442 17.2723 2.00722 17.2845 2.02062L17.2928 2.02972L17.3012 2.03872L30.7248 16.4445L30.7488 16.4703L30.7738 16.4953C32.4126 18.1342 35.1198 18.2386 36.7685 16.4371L50.1516 2.07474C50.2247 2.00822 50.2841 2 50.3078 2C50.3222 2 50.3296 2.00273 50.3321 2.00382C50.333 2.00422 50.3397 2.00672 50.3524 2.02062L50.3607 2.02972L50.369 2.03872L63.7926 16.4445L63.8167 16.4703L63.8416 16.4953C65.4805 18.1342 68.1877 18.2386 69.8364 16.4371L83.2194 2.07475C83.2925 2.00822 83.352 2 83.3757 2C83.39 2 83.3975 2.00273 83.4 2.00382L83.4001 2.00387C83.4014 2.00442 83.4081 2.00723 83.4203 2.02062L83.4285 2.02972L83.4369 2.03872L96.8605 16.4445L96.8846 16.4703L96.9095 16.4953C98.5484 18.1342 101.256 18.2386 102.904 16.4371L116.321 2.03872L116.329 2.02972L116.338 2.02062C116.339 2.01875 116.343 2.01524 116.353 2.01075C116.366 2.00539 116.387 2 116.413 2C116.439 2 116.46 2.00539 116.473 2.01075C116.483 2.01524 116.486 2.01875 116.488 2.02062L116.496 2.02972L116.505 2.03872L129.928 16.4445L129.952 16.4703L129.977 16.4953C131.617 18.1346 134.325 18.2386 135.974 16.4354C135.976 16.4324 135.979 16.4294 135.982 16.4264L147.801 3.71127C147.873 3.64521 147.933 3.63702 147.956 3.63702C147.971 3.63702 147.978 3.63976 147.981 3.64084L147.981 3.6409C147.982 3.64145 147.989 3.64426 148.001 3.65764L148.033 3.69286L148.067 3.72651C148.105 3.76497 148.156 3.85261 148.156 3.99025C148.156 4.12788 148.105 4.21552 148.067 4.25398L148.04 4.28002L148.015 4.30701L133.037 20.4317L133.028 20.4414C132.978 20.496 132.938 20.5186 132.918 20.528C132.897 20.5377 132.881 20.5399 132.87 20.5401C132.857 20.5403 132.81 20.5388 132.742 20.4776L119.439 6.03224Z" />
                                </svg>
                              </div>
                              <h1 className="title">
                                International Conference - MEC 2024
                              </h1>
                              <p
                                className="description wow fadeInUp"
                                data-wow-delay="1.3s"
                                data-wow-duration="1s"
                              >
                                20th - 21st March 2024 <br /> 9:30 AM to 4:00 PM
                              </p>
                              <div
                                className="hero-btns wow fadeInUp"
                                data-wow-delay="1.5s"
                                data-wow-duration="1s"
                              >
                                <a
                                  href="/registration"
                                  className="btn-fill style-five"
                                >
                                  Register Now
                                </a>
                                {/* <ul>
                            <li>
                              <a
                                href="/registration"
                                className="btn-fill style-two"
                              >
                                Registration
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://radiustheme.com/demo/wordpress/themes/evacon/event/digital-business-conference/"
                                className="btn-fill style-four"
                              >
                                View Details
                              </a>
                            </li>
                          </ul> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6353059 elementor-widget elementor-widget-rt-countdown"
                  data-id={6353059}
                  data-element_type="widget"
                  data-widget_type="rt-countdown.default"
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-cbbd5b0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="cbbd5b0"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9607693"
              data-id={9607693}
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <section
                  className="elementor-section elementor-inner-section elementor-element elementor-element-7f8373e elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="7f8373e"
                  data-element_type="section"
                >
                  {/* INTERNATIONAL COLLABORATION UNI LOGOS */}
                  <div
                    className="elementor-element elementor-element-8bec65b elementor-align-left elementor-widget elementor-widget-rt-title"
                    data-id="8bec65b"
                    data-element_type="widget"
                    data-widget_type="rt-title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="section-heading style-one">
                        <div className="heading-subtitle">
                          International Collaboration Universities :
                        </div>
                        <div className="image-gallery">
                          <img
                            src="assets/college.png"
                            alt="Acharya college logo"
                            id="a"
                          />
                          <img src="assets/budi.png" alt="Budi logo" id="b" />
                          <img
                            src="assets/ukraine.png"
                            alt="Ukraine logo"
                            id="c"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-cc30f35"
                      data-id="cc30f35"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-d575cad elementor-widget elementor-widget-rt-image-box"
                          data-id="d575cad"
                          data-element_type="widget"
                          data-widget_type="rt-image-box.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="about-box-layout1">
                              <div className="figure-wrap">
                                <div
                                  className="main-figure image-1 wow fadeInLeft"
                                  data-wow-delay="0.1s"
                                  data-wow-duration="1s"
                                >
                                  <img
                                    fetchpriority="high"
                                    decoding="async"
                                    width={729}
                                    height={1050}
                                    src="assets/front.jpeg"
                                    className="attachment-full size-full"
                                    alt=""
                                    srcSet="assets/front.jpeg 729w, assets/front.jpeg 600w, assets/front.jpeg 711w"
                                    sizes="(max-width: 729px) 100vw, 729px"
                                  />
                                </div>
                                <div className="sub-figure">
                                  <ul>
                                    <li
                                      className="wow image-2 zoomIn"
                                      data-wow-delay="0.3s"
                                      data-wow-duration="0.4s"
                                    >
                                      <img
                                        decoding="async"
                                        width={106}
                                        height={106}
                                        src="assets/tiranga.jpeg"
                                        className="attachment-full size-full"
                                        alt=""
                                      />
                                    </li>
                                    <li
                                      className="wow image-3 zoomIn"
                                      data-wow-delay="0.5s"
                                      data-wow-duration="0.4s"
                                    >
                                      <img
                                        decoding="async"
                                        width={157}
                                        height={157}
                                        src="assets/grad.jpg"
                                        className="attachment-full size-full"
                                        alt=""
                                        srcSet="assets/grad.jpg 157w, assets/grad.jpg 150w"
                                        sizes="(max-width: 157px) 100vw, 157px"
                                      />
                                    </li>
                                    <li
                                      className="wow image-4 zoomIn"
                                      data-wow-delay="0.7s"
                                      data-wow-duration="0.4s"
                                    >
                                      <img
                                        loading="lazy"
                                        decoding="async"
                                        width={218}
                                        height={218}
                                        src="assets/crowd.jpg"
                                        className="attachment-full size-full"
                                        alt=""
                                        srcSet="assets/crowd.jpg 218w, assets/crowd.jpg 150w"
                                        sizes="(max-width: 218px) 100vw, 218px"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a4817e2"
                      data-id="a4817e2"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-5894d25 elementor-widget elementor-widget-text-editor"
                          data-id="5894d25"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="elementor-widget-container">
                            <p className="description">
                              International Conference on Management, Technology
                              & Entrepreneurial Challenges in Dynamic Business
                              Environment- MEC 2024, Department of MBA, and
                              Department of MCA, Acharya Institute of
                              Technology, Bengaluru in association with
                              Universitas Budi Luhur, Indonesia and The State
                              University of Economics and Technology, Ukraine.
                              The event is scheduled to take place on March 20th
                              and 21th, 2024.
                            </p>

                            <p className="description">
                              <h5 className="heading-title">
                                About the Conference Objectives :
                              </h5>
                            </p>
                            <ul>
                              <li>
                                To facilitate the sharing of cutting-edge
                                knowledge, research findings, and best practices
                                in the fields of management, technology and
                                entrepreneurship
                              </li>
                              <li>
                                To provide a platform for attendees to network
                                and build valuable connections with peers,
                                industry experts, and potential collaborators
                              </li>
                              <li>
                                To explore sustainable management, emerging
                                technologies and entrepreneurship practices that
                                can benefit businesses and the environment
                              </li>
                              <li>
                                To discuss and influence policies that impact
                                the management, technology and entrepreneurship
                                ecosystem
                              </li>
                            </ul>

                            <p className="description">
                              <h5 className="heading-title">
                                Expected Outcome of the Program :
                              </h5>
                            </p>
                            <ul>
                              <li>
                                Increased awareness and understanding of the
                                latest trends, research findings, and best
                                practices in management, technology and
                                entrepreneurship
                              </li>
                              <li>
                                Enhanced knowledge and skills among
                                participants, which they can apply in their
                                professional roles
                              </li>
                              <li>
                                Expanded professional networks for attendees,
                                leading to potential collaborations,
                                partnerships, and business opportunities
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-5df2dcb elementor-widget elementor-widget-rt-button"
                          data-id="5df2dcb"
                          data-element_type="widget"
                          data-widget_type="rt-button.default"
                        >
                          {/* <div className="elementor-widget-container">
                      <div className="btn-wrap">
                        <a
                          href="https://radiustheme.com/demo/wordpress/themes/evacon/event/indore-3d-deigned-movie-make-magic/"
                          className="item-btn btn-fill style-one"
                        >
                          View Details
                        </a>
                      </div>
                    </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;