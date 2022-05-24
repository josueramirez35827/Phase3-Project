import cover1 from './images/Cover Letter 1.png';


function Card() {
  return (
    <div class="card">

    <div class="card__cover">
        <img class="fixed" src={cover1} />
    </div>

    <div class="card__content">
        Title
    </div>
    This is the body
</div>
  )
} 

export default Card;