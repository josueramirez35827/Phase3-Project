
import StandardNavMenu from './Navbar/StandardNavMenu';
import SimpleCard from './SimpleCard';
import Cover1 from './images/Cover Letter 1.png';
import Cover2 from './images/Cover Letter 2.png';
import Cover3 from './images/Cover Letter 3.png';
import Cover4 from './images/Cover Letter 4.png';
import Cover5 from './images/Cover Letter 5.png';
import Cover6 from './images/Cover Letter 6.png';
import Cover7 from './images/Cover Letter 7.png';
import Cover8 from './images/Cover Letter 8.png';
import Cover9 from './images/Cover Letter 9.png';


function App() {
  return (

    <div className="App">
      <div>
        <StandardNavMenu />
      </div>

      <div >
        <SimpleCard
        title="Standard Cover Letter"
        text="Some simple text that describes what's going on in this very simple card."
        image={Cover1}
        buttonText="Pick Me!"
        buttonLink="https://www.google.com"
      />
      <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover2}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
        /> 
        <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover3}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
        /> 
        <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover4}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
        /> 
        <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover5}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
        /> 
        <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover6}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
        /> 
        <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover7}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
        /> 
        <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover8}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
        /> 
        <SimpleCard
      title="Standard Cover Letter"
      text="Some simple text that describes what's going on in this very simple card."
      image={Cover9}
      buttonText="Pick Me!"
      buttonLink="https://www.google.com"
    /> 
      </div>
      
    </div>
  );
}

export default App;
