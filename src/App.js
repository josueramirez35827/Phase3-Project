
import './index.css';
import Card from './Card';
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

 const arr = [cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8, cover9]




  return (
    <div>
      {arr.map((coverL) => (<Card src={coverL} />))}

    </div>
  );
}

export default App;
