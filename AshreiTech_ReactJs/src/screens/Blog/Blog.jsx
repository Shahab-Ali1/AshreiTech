import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import wave from "../../assets/blog/wave.png";
import bg1 from "../../assets/blog/bg1.png";
import style from "./Blog.module.css";

// PostCard component
// PostCard component
const PostCard = ({ image, category, title, authorImage, authorName, date }) => {
    return (
        <div className="col-12 col-md-4 mb-4"> {/* 3 cards per row on md+ screens */}
            <div style={{
                backgroundColor: 'rgb(249 249 253)',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out',
                padding: '15px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* Image container with fixed aspect ratio */}
                <div style={{
                    position: 'relative',
                    paddingTop: '56.25%', // 16:9 aspect ratio
                    overflow: 'hidden',
                    borderRadius: '8px',
                }}>
                    <img 
                        src={image} 
                        alt={title} 
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', 
                            borderRadius: '8px',
                        }}
                    />
                </div>
                <div style={{ padding: '6px' }}>
                    <div className="p-1" style={{
                        backgroundColor: "rgba(75, 107, 251, 0.05)",
                        width: "65px",
                        borderRadius: "5px",
                    }}>
                        <div style={{
                            fontWeight: '500',
                            fontSize: '10px',
                        }}>
                            {category}
                        </div>
                    </div>
                    <div className='mt-1 mb-2' style={{
                        fontFamily: "Barlow, sans-serif",
                        color: '#160A54',
                        fontWeight: '600',
                        fontSize: '18px',
                    }}>
                        {title}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '14px',
                        color: '#6c757d',
                    }}>
                        <img alt={authorName} src={authorImage} height="30" width="30" style={{
                            borderRadius: '50%',
                            marginRight: '10px',
                        }} />
                        <span>{authorName}</span>
                        <span style={{ marginLeft: '10px' }}>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default function Blog() {
    const { bg_purple } = style;

    // Array of posts
    const posts = [
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        // Other posts...
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
        {
            image: 'https://storage.googleapis.com/a1aa/image/CsTBghS5KHo1CV5gik4RTUohLP0dYRVouiZ8yw2YbC6usu7E.jpg',
            category: 'Technology',
            title: 'The Impact of Technology on the Workplace: How Technology is Changing',
            authorImage: 'https://storage.googleapis.com/a1aa/image/tMGNsl9hJ9YQKhziA224mrXTTmZyRGSt8qtiSFBLJp7vsu7E.jpg',
            authorName: 'Tracey Wilson',
            date: 'August 20, 2022',
        },
    ];

    return (
        <>
            {/* Main Container */}
            <div
                className={`container-fluid m-0 p-0 `}
        
            >
                <TopNavbar />
            </div>

            {/* Content Area */}
            <div         style={{
                    backgroundImage: `url(${wave})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '20px',
                    // backgroundPosition:'bottom'
                }}
                 className={`container-fluid m-0 pl-sm-5 pr-sm-5  pt-5`}>
                {/* Main Image Section */}
                <div className="row ml-sm-5 mr-sm-5 pr-sm-5 pl-sm-5 pb-sm-5">
                    <div className="pl-sm-5 mr-sm-5 ml-sm-2 position-relative">
                       <div>
                         <img
                            src={bg1}
                            className="img-fluid m-0 wounded  position-relative pl-sm-5 pr-sm-5"
                            alt="Secondary background image"
                            style={{
                                zIndex: 1,
                            }}
                        />
                       </div>
                        {/* Overlay with Content */}
                        <div
                            className="position-absolute d-sm-block d-none bg-white p-3 shadow-sm"
                            style={{
                                bottom: '-45px',
                                left: '142px',
                                zIndex: 3,
                                width: '420px',
                                borderRadius: '10px',
                            }}
                        >
                            <div className='pl-2'>
                                <div
                                    className="tag badge mb-2 "
                                    style={{
                                        backgroundColor: "#160A54",
                                        color: "white",
                                        fontSize: "10px",
                                        padding: "5px 8px",
                                        fontWeight: "500"
                                    }}
                                >
                                    <div>Technology</div>
                                </div>
                            </div>

                            <div className="gradientCircleLeft"></div>

                            <h2 className="title h4 mb-2 pl-2"
                                style={{ color: "#160A54", fontWeight: "600" }}>
                                The Impact of Technology on the Workplace: How Technology is Changing
                            </h2>
                            <div className="author pl-2 pb-3 d-flex align-items-center text-muted">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/xryAnF7624YfHSMAVVjcEe3bulSrKt2ahTvDhgJ1fAJKzQZnA.jpg"
                                    className="rounded-circle mr-2"
                                    alt="Author's profile picture"
                                    width="25"
                                    height="25"
                                />
                                <span style={{
                                    fontSize: "11px",
                                    fontWeight: "500",
                                    color: "97989F",
                                    fontFamily: "Barlow,sans-serif",
                                }}>Jason Francisco</span>
                                <span style={{
                                    fontSize: "11px",
                                    fontWeight: "500",
                                    color: "97989F",
                                    fontFamily: "Barlow,sans-serif",
                                }} className="ml-2">August 20, 2022</span>
                            </div>
                        </div>
                        <div
                            className="position-absolute d-sm-none d-block bg-white p-3 shadow-sm"
                            style={{
                                bottom: '-84px',
                                left: '4%',
                                zIndex: 3,
                                width: '91.5%',
                                borderRadius: '10px',
                            }}
                        >
                            <div className='pl-2'>
                                <div
                                    className="tag badge mb-2 "
                                    style={{
                                        backgroundColor: "#160A54",
                                        color: "white",
                                        fontSize: "10px",
                                        padding: "5px 8px",
                                        fontWeight: "500"
                                    }}
                                >
                                    <div>Technology</div>
                                </div>
                            </div>

                            <div className="gradientCircleLeft"></div>

                            <h2 className="title h4 mb-2 pl-2"
                                style={{ color: "#160A54", fontWeight: "600" }}>
                                The Impact of Technology on the Workplace: How Technology is Changing
                            </h2>
                            <div className="author pl-2 pb-3 d-flex align-items-center text-muted">
                                <img
                                    src="https://storage.googleapis.com/a1aa/image/xryAnF7624YfHSMAVVjcEe3bulSrKt2ahTvDhgJ1fAJKzQZnA.jpg"
                                    className="rounded-circle mr-2"
                                    alt="Author's profile picture"
                                    width="25"
                                    height="25"
                                />
                                <span style={{
                                    fontSize: "11px",
                                    fontWeight: "500",
                                    color: "97989F",
                                    fontFamily: "Barlow,sans-serif",
                                }}>Jason Francisco</span>
                                <span style={{
                                    fontSize: "11px",
                                    fontWeight: "500",
                                    color: "97989F",
                                    fontFamily: "Barlow,sans-serif",
                                }} className="ml-2">August 20, 2022</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Posts Section */}
                <div className="container-fluid  mt-3  pl-sm-5 ml-sm-5"
                    style={{
                        fontFamily: 'Barlow, sans-serif',
                        fontSize: 'larger',
                    }}
                >

                    <div className="col-12 mt-5 pt-5 pl-sm-5 ml-sm-5">
                        <h3 className='ml-sm-4' style={{ fontSize: "19px", fontFamily: "Barlow,sans-serif", fontWeight: "bold", color: '#160A54' }} >Latest Post</h3>
                    </div>
                </div>

                {/* Blog Cards Container */}
                <div className="container-fluid mt-4 mx-sm-5 px-sm-5 p-0 " style={{
                    // marginright: '10px',
                    // marginleft: '10px',
                    // paddingright: '110px',
                    // paddingleft: '110px',
                }}>
                    <div className="row px-sm-5 mx-sm-5 ">
                        {posts.map((post, index) => (
                            <PostCard key={index} {...post} />
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="text-center pb-5">
                    {/* <button
                        className="btn btn-primary"
                        style={{
                            padding: '8px 15px',
                            fontSize: '11.5px',
                            fontWeight: "500",
                            fontFamily: "Barlow,sans-serif",
                            borderRadius: '6px',
                            backgroundColor: 'transparent',
                            color: "#160A54",
                            border: "1px solid #160A54",

                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#5b53e1')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#6c63ff')}
                    >
                        View All Post
                    </button> */}
                    
                    <div className="  navbtn p-2 d-inline-block " >
                          Veiw All Post
                        </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

