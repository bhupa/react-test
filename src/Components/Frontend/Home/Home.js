import React,{ useState } from 'react';
import './Home.css'
import Property from '../Grid-View/Property';
import Slider from '../slider/slider';
import BlogLists from '../Blog/BlogLists';
import Work from '../Work/Work';


function Home() {
    const [activeTab, setActiveTab] = useState('buy');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    return (
        <div>

            <div className="custom-bg">
                <div className="container">
                    <div className='home-banner-wrapper'>
                        <div className="home-wrapper-style">

                            <h2 className="home-section-title" style={{ color: '#FFFFFF' }}>
                                Buy or rent properties <br />
                                with no commission

                            </h2>
                        </div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'buy' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('buy')}
                                >
                                    Buy
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'sell' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('sell')}
                                >
                                    Sell
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === 'rent' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('rent')}
                                >
                                    Rent
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content home-content-tab">
                        <div className={`tab-pane ${activeTab === 'buy' ? 'active' : ''}`} id="buy">
                        <form className="form-inline">
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="inputCategory" className="sr-only">Category</label>
                                <select className="form-control" id="inputCategory">
                                <option value="">Select Category</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                                <option value="rent">Rent</option>
                                </select>
                                
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="inputCategory" className="sr-only">Type</label>
                                <select className="form-control" id="inputCategory">
                                <option value="">Select Category</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                                <option value="rent">Rent</option>
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor="inputCategory" className="sr-only">Price</label>
                                <select className="form-control" id="inputCategory">
                                <option value="">Select Category</option>
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                                <option value="rent">Rent</option>
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                            <button type="submit" className="btn btn-primary mb-2">Search</button>
                            </div>
                            
                            </form>
                        </div>
                        <div className={`tab-pane ${activeTab === 'sell' ? 'active' : ''}`} id="sell">
                        {/* Form for Sell */}
                        <h3>Sell</h3>
                        <form>
                            {/* Add form fields for selling */}
                        </form>
                        </div>
                        <div className={`tab-pane ${activeTab === 'rent' ? 'active' : ''}`} id="rent">
                        {/* Form for Rent */}
                        <h3>Rent</h3>
                        <form>
                            {/* Add form fields for renting */}
                        </form>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
            <Property />
            <Work />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="" className="img-fluid" alt="Image" />
                    </div>
                    <div className="col-md-6">
                        <h2>Title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac turpis eget nisi vehicula auctor id a metus. Nullam sit amet tortor eu ex facilisis accumsan. Duis consectetur nulla sit amet cursus iaculis.</p>

                        <ul>
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Slider />
            <BlogLists />
            {/* <TestimonialSection /> */}

        </div>

    )
}
export default Home;