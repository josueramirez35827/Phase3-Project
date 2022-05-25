
import './index.css';
// import Card from './Card';
import cover1 from './images/Cover Letter 1.png'
import cover2 from './images/Cover Letter 2.png'
import cover3 from './images/Cover Letter 3.png'
import cover4 from './images/Cover Letter 4.png'
import cover5 from './images/Cover Letter 5.png'
import cover6 from './images/Cover Letter 6.png'
import cover7 from './images/Cover Letter 7.png'
import cover8 from './images/Cover Letter 8.png'
import cover9 from './images/Cover Letter 9.png'

function App() {

  return (
      <div className="wrapper">
        <Card
          img={cover1}
          title="Standard Cover Letter"
          description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
        />
  
        <Card
          img={cover2}
          title=""
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />
  
        <Card
          img={cover3}
          title="Baked Cod with Vegetables"
          description="Baked Cod with Vegetables. 30 minute meal!"
      />
        <Card
          img={cover4}
          title="The Everyday Salad"
          description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
        />
  
        <Card
          img={cover5}
          title="Simple Risotto"
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />
  
        <Card
          img={cover6}
          title="Baked Cod with Vegetables"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />
              <Card
          img={cover7}
          title="The Everyday Salad"
          description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
        />
  
        <Card
          img={cover8}
          title="Simple Risotto"
          description="Fear Risotto no more! This simple recipe is perfect for family dinners."
        />
  
        <Card
          img={cover9}
          title="Baked Cod with Vegetables"
          description="Baked Cod with Vegetables. 30 minute meal!"
        />
      </div>
    );
  }
  
  function Card(props) {
    return (
      <div className="card">
        <div className="card__body">
          <img src={props.img} class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">Pick ME!</button>
      </div>
  );
}

export default App;
