import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import imageUrl from '../../../img/banner.jpeg'
 class Slider extends Component {  
        render()  
        {      
          return (  
              <div>  
            <div className='container-fluid' >      
            <div className="row title" style={{marginBottom: "20px"}} >      
            <div className="col-sm-12 btn btn-info">      
            Owl Carousel with Auto Play Property In React Application   
            </div>      
            </div>  
        </div>  
        <div  className='container-fluid' >   
          <OwlCarousel items={6} margin={8} autoplay ={true} >  
        <div ><img  className="img" src= {imageUrl}/></div>  
           <div><img  className="img" src= {imageUrl}/></div>  
           <div><img  className="img" src= {imageUrl}/></div>  
           <div><img  className="img" src= {imageUrl}/></div>  
           <div><img className="img" src= {imageUrl}/></div>  
           <div><img className="img" src= {imageUrl}/></div>  
           <div><img className="img" src= {imageUrl}/></div>  
      </OwlCarousel>  
      </div>  
      </div>  
          )  
        }  
      }  
        
  

export default Slider;