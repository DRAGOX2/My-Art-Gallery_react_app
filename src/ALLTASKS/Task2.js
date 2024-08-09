import logo from './logo.svg';
import './App.css';
import img1 from './Images/catoru gojo.jpg'; 
import img2 from './Images/download (3).jpg';
import img3 from './Images/Yuta Okkotsu.jpg';
import img4 from './Images/itadori _33.jpg';
import img5 from './Images/Sukuna chibi pin.jpg'
import img6 from './Images/killua doodle.jpg'

function App(props) {
  return (
<div className='container'>
  <div className='Head' ><strong> E - Art Gallery</strong></div>
  <br/>
    <div className='images'>
      <div className='image1'>
       <img  src={img1} alt='Exam' className='catoru'/><br/>
        Name: Catoru GOJO<br/>
        Price : 2,000

      </div>
      <div className='image2'>
       <img  src={img2} alt='Exam' className='satoru'/><br/>
        Name: Satoru GOJO<br/>
        Price: 3,000
      </div>
      <div className='image3'>
       <img  src={img3} alt='Exam' className='yuta'/><br/>
        Name: Yuta Otuski<br/>
        Price: 4,000
      </div>
    </div><br/><br/>
    <div className='images2'>
      <div className='image4'>
       <img  src={img4} alt='Exam' className='itadori'/><br/>
        Name: Itadori Yuji
        <br/>
        Price: 5,999
      </div>
      
      <div className='image5'>
       <img  src={img5} alt='Exam' className='Sukuna'/><br/>
        Name: Sukuna <br/>
        Price: 4,999
      </div>
      
      <div className='image6'>
       <img  src={img6} alt='Exam' className='killua'/><br/>
        Name: Killua zoldyck
        <br/>
        Price: 6,999
      </div>
    </div>
    <br/><br/><br/><br/>

    {/* <div className='Butt'>
      <select className='OPTION' >
        <option value =''disabled selected>{props.REVIEW}</option>
        <option>{props.LOW}</option>
        <option>{props.MED}</option>
        <option>{props.HIGH}</option>
      </select>
      <br/><br/><br/>
      <button type=''>Submit</button>

    </div> */}

</div>
  );
}

export default App;
