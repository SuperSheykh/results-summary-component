import Header from './components/Header'
import Summary from './components/Summary'
import data from './data'
export default function App() {
   const totalScore = () => {
      const points = 100 * data.length
      let score = 0
      data.map((cat) => {
         score += cat.score
      })
      return Math.floor((score / points) * 100)
   }

   return (
      <main>
         <Header totalScore={totalScore()} />
         <section className='summary-section'>
            <Summary data={data} />
            <button>Continue</button>
         </section>
      </main>
   )
}
