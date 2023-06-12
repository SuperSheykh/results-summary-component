export default function Header(props) {
   return (
      <section className='header-section'>
         <h4>Your Result</h4>
         <div className='circle'>
            <h1>{props.totalScore}</h1>
            <p className='greyed'>of 100</p>
         </div>
         <h3>Great</h3>
         <p className='greyed'>
            You scored higher than 65% of the people who have taken these tests.
         </p>
      </section>
   )
}
