import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class NavbarV3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
		<div>
           <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">
			  <div className="ltn__header-top-area top-area-color-white">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-7">
			          <div className="ltn__top-bar-menu ">
			            <ul>
			            <li><a href="mailto:info@gmpropertydubai.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> info@gmpropertydubai.com</a></li>
						<li><a href="locations.html"><i className="icon-placeholder" /> England X07, Dubai - United Arab Emirates</a></li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-md-5">
			          <div className="top-bar-right text-end">
			            <div className="ltn__top-bar-menu">
			              <ul>
			                <li>
			                  {/* ltn__language-menu */}
			           
			                </li>
			                <li>
							<Social />
			                </li>
			              </ul>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
			    <div className="container">
			      <div className="row">
			        <div className="col">
			          <div className="site-logo-wrap">
			            <div className="site-logo go-top">
							<Link to="/"><img src={publicUrl+"/assets/img/logo.png"} alt="Logo" /></Link>
			            </div>
			            <div className="get-support clearfix d-none">
			              <div className="get-support-icon">
			                <i className="icon-call" />
			              </div>
			              <div className="get-support-info">
			                <h6>Get Support</h6>
			                <h4><a href="tel:+123456789">123-456-789-10</a></h4>
			              </div>
			            </div>
			          </div>
			        </div>



			        <div className="col header-menu-column menu-color-white">
			          <div className="header-menu d-none d-xl-block go-top">
			            <nav>
			              <div className="ltn__main-menu">
			                <ul>

							<li className="menu-icon"><Link to="#">LUXURY</Link>
								<ul className="mega-menu">
								<li><Link to="/shop"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									
									<li><Link to="/shop"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									
									<li><Link to="#">LUXURY</Link>
										<ul>
											<li><Link to="/shop">Exclusive Projects</Link></li>
											<li><Link to="/shop-left-sidebar">Luxury Properties for Sale</Link></li>
											<li><Link to="/shop-right-sidebar">Luxury Apartments For Sale</Link></li>
											<li><Link to="/shop-grid">Luxury Villas For Sale</Link></li>
											<li><Link to="/product-details">Luxury Apartments For Rent </Link></li>
											<li><Link to="/cart">Luxury Villas For Rent</Link></li>
										</ul>
									</li>
									
								</ul>
							</li>


							<li className="menu-icon"><Link to="#">BUY</Link>
								<ul className="mega-menu">
									<li><a href="#">BUY READY PROPERTY</a>
										<ul>
											<li><Link to="/portfolio">Properties For Sale</Link></li>
											<li><Link to="/portfolio-v2">Apartments For Sale</Link></li>
											<li><Link to="/portfolio-details">Villas For Sale</Link></li>
											<li><Link to="/team">Townhouses for Sale</Link></li>
											<li><Link to="/team-details">Penthouses For Sale</Link></li>
											<li><Link to="/faq">Studio For Sale</Link></li>
										</ul>
									</li>
									<li><Link to="#">BUY OFF PLAN PROPERTY</Link>
										<ul>
											<li><Link to="/history">Off Plan Apartments</Link></li>
											<li><Link to="/add-listing">Off Plan Villas</Link></li>
											<li><Link to="/location">Off Plan Properties Dubai</Link></li>
											<li><Link to="/404">Sell Your Property</Link></li>
										
										</ul>
									</li>
									<li><Link to="#">LIFESTYLE</Link>
										<ul>
											<li><Link to="/shop">Burj Khalifa View</Link></li>
											<li><Link to="/shop-left-sidebar">Waterfront Properties</Link></li>
											<li><Link to="/shop-right-sidebar">Beachfront Properties</Link></li>
											<li><Link to="/shop-grid">Green Nature Living</Link></li>
											<li><Link to="/product-details">Near Golf Course </Link></li>
											
										</ul>
									</li>
									<li><Link to="#">COMMERCIAL PROPERTY</Link>
										<ul>
											<li><Link to="/shop">Offices For Sale</Link></li>
											<li><Link to="/shop-left-sidebar">Shops for Sale</Link></li>
											<li><Link to="/shop-right-sidebar">Commercial For Sale</Link></li>
											<li><Link to="/shop-grid">Industrial For Sale</Link></li>
											<li><Link to="/product-details">Land For Sale </Link></li>
											
										</ul>
									</li>
									
								</ul>
							</li>

							<li className="menu-icon"><Link to="#">RENT</Link>
								<ul className="mega-menu">
								<li><Link to="/shop"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									<li><Link to="/shop"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									
									<li><a href="#">RESIDENTIAL</a>
										<ul>
											<li><Link to="/portfolio">Properties For Rent</Link></li>
											<li><Link to="/portfolio-v2">Short Term Rentals</Link></li>
											<li><Link to="/portfolio-details">Apartments For Rent</Link></li>
											<li><Link to="/team">Studio Apartments For Rent</Link></li>
											<li><Link to="/team-details">Hotel Apartments For Rent</Link></li>
											<li><Link to="/faq">Villas For Rent</Link></li>
											<li><Link to="/faq">Townhouses for Rent</Link></li>
										</ul>
									</li>
									<li><Link to="#">COMMERCIAL</Link>
										<ul>
											<li><Link to="/history">Offices For Rent</Link></li>
											<li><Link to="/add-listing">Commercial For Rent</Link></li>
											<li><Link to="/location">Warehouses For Rent</Link></li>
										
										</ul>
									</li>
								
									
								</ul>
							</li>

							<li className="menu-icon"><Link to="#">OUR SERVICES </Link>
								<ul className="mega-menu">
								<li><Link to="#">PROPERTY MANAGEMENT</Link>
									<li><Link to="/shop"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									</li>
									<li><Link to="#">MORTGAGE CALCULATOR & ADVISORY</Link>
									<li><Link to="/shop"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									</li>
									<li><a href="#">OUR SERVICES</a>
										<ul>
											<li><Link to="/portfolio">Property Management</Link></li>
											<li><Link to="/portfolio-v2">Mortgage Calculator & Advisory</Link></li>
											<li><Link to="/portfolio-details">Relocation Services</Link></li>
											<li><Link to="/team">Property Investment</Link></li>
											<li><Link to="/team-details">Property Valuation</Link></li>
											<li><Link to="/faq">Property Brokerage</Link></li>
											<li><Link to="/faq">Commercial</Link></li>
											<li><Link to="/faq">Interior Design & Fit Out</Link></li>
										</ul>
									</li>
									
								
								
								</ul>
							</li>

							<li className="menu-icon"><Link to="#">ABOUT US </Link>
								<ul className="mega-menu">

								<li><Link to="#">Captain Aamir</Link>
								<li><Link to="/shop"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									</li>
									<li><Link to="#">Team</Link>
									<li><Link to="/team"><img src={publicUrl+"assets/img/banner/menu-banner-1.jpg"} alt="#" /></Link>
									</li>
									</li>
									<li><a href="#">ABOUT US</a>
										
								
										
										<ul>
											<li><Link to="/portfolio">Management</Link></li>
											<li><Link to="/portfolio-v2">Find Agent</Link></li>
											<li><Link to="/team">Team</Link></li>
											<li><Link to="/team">Agent Recruitment</Link></li>
											<li><Link to="/team-details">Awards</Link></li>
											<li><Link to="/faq">Testimonials</Link></li>
										</ul>
									</li>
								
								</ul>
							</li>
							<li><Link to="/contact">CONTACT</Link></li>

					

					
						
			                  <li className="special-link">
			                    <Link to="/contact">GET Quote</Link>
			                  </li>
			                </ul>
			              </div>
			            </nav>
			          </div>
			        </div>





			        <div className="col--- ltn__header-options ltn__header-options-2 ">
			          {/* Mobile Menu Button */}
			          <div className="mobile-menu-toggle d-xl-none">
			            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
			              <svg viewBox="0 0 800 600">
			                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
			                <path d="M300,320 L540,320" id="middle" />
			                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
			              </svg>
			            </a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</header>
			<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">





				
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<Link to="/"><img src={publicUrl+"/assets/img/logo.png"} alt="Logo" /></Link>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
					<div className="ltn__utilize-menu-search-form">
					<form action={"#"}>
						<input type="text" placeholder="Search..." />
						<button><i className="fas fa-search" /></button>
					</form>
					</div>
					<div className="ltn__utilize-menu">


					<ul>
						<li><a href="#">Home</a>
						<ul className="sub-menu">
						<li><Link to="/">Home Style 01</Link></li>
						<li><Link to="/home-v2">Home Style 02</Link></li>
						<li><Link to="/home-v3">Home Style 03</Link></li>
						<li><Link to="/home-v4">Home Style 04</Link></li>
						<li><Link to="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></Link></li>
						<li><Link to="/home-v6">Home Style 06</Link></li>
						<li><Link to="/home-v7">Home Style 07</Link></li>
						<li><Link to="/home-v8">Home Style 08</Link></li>
						<li><Link to="/home-v9">Home Style 09</Link></li>
						<li><Link to="/home-v10">Home Style 10</Link></li>
						</ul>
						</li>
						<li><Link to="/about">About</Link>
						<ul className="sub-menu">
							<li><Link to="/about">About</Link></li>
							<li><Link to="/service">Services</Link></li>
							<li><Link to="/service-details">Service Details</Link></li>
							<li><Link to="/portfolio">Portfolio</Link></li>
							<li><Link to="/portfolio-v2">Portfolio - 02</Link></li>
							<li><Link to="/portfolio-details">Portfolio Details</Link></li>
							<li><Link to="/team">Team</Link></li>
							<li><Link to="/team-details">Team Details</Link></li>
							<li><Link to="/faq">FAQ</Link></li>
							<li><Link to="/location">Google Map Locations</Link></li>
						</ul>
						</li>
						<li><Link to="/shop">Shop</Link>
						<ul className="sub-menu">
							<li><Link to="/shop">Shop</Link></li>
							<li><Link to="/shop-grid">Shop Grid</Link></li>
							<li><Link to="/shop-left-sidebar">Shop Left sidebar</Link></li>
							<li><Link to="/shop-right-sidebar">Shop Right sidebar</Link></li>
							<li><Link to="/product-details">Shop Details</Link></li>
							<li><Link to="/cart">Cart</Link></li>
							<li><Link to="/checkout">Checkout</Link></li>
							<li><Link to="/my-account">My Account</Link></li>
							<li><Link to="/login">Sign in</Link></li>
							<li><Link to="/register">Register</Link></li>
						</ul>
						</li>
						<li><Link to="/blog-grid">News</Link>
						<ul className="sub-menu">
							<li><Link to="/blog">News</Link></li>
							<li><Link to="/blog-grid">News Grid</Link></li>
							<li><Link to="/blog-left-sidebar">News Left sidebar</Link></li>
							<li><Link to="/blog-right-sidebar">News Right sidebar</Link></li>
							<li><Link to="/blog-details">News details</Link></li>
						</ul>
						</li>
						<li><Link to="#">Pages</Link>
							<ul class="sub-menu">
								<li><Link to="/about">About</Link></li>
								<li><Link to="/service">Services</Link></li>
								<li><Link to="/service-details">Service Details</Link></li>
								<li><Link to="/portfolio">Portfolio</Link></li>
								<li><Link to="/portfolio-2">Portfolio - 02</Link></li>
								<li><Link to="/portfolio-details">Portfolio Details</Link></li>
								<li><Link to="/team">Team</Link></li>
								<li><Link to="/team-details">Team Details</Link></li>
								<li><Link to="/faq">FAQ</Link></li>
								<li><Link to="/history">History</Link></li>
								<li><Link to="/add-listing">Add Listing</Link></li>
								<li><Link to="/locations">Google Map Locations</Link></li>
								<li><Link to="/404">404</Link></li>
								<li><Link to="/contact">Contact</Link></li>
								<li><Link to="/coming-soon">Coming Soon</Link></li>
							</ul>
                    	</li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>








					</div>
					<div className="ltn__utilize-buttons ltn__utilize-buttons-2">
					<ul>
						<li>
						<Link to="/my-account" title="My Account">
							<span className="utilize-btn-icon">
							<i className="far fa-user" />
							</span>
							My Account
						</Link>
						</li>
						<li>
						<Link to="/wishlist" title="Wishlist">
							<span className="utilize-btn-icon">
							<i className="far fa-heart" />
							<sup>3</sup>
							</span>
							Wishlist
						</Link>
						</li>
						<li>
						<Link to="/cart" title="Shoping Cart">
							<span className="utilize-btn-icon">
							<i className="fas fa-shopping-cart" />
							<sup>5</sup>
							</span>
							Shoping Cart
						</Link>
						</li>
					</ul>
					</div>
					<div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
					</div>
				</div>









				</div>
		</div>
        )
    }
}


export default NavbarV3