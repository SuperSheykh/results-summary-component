import Category from './Category'
export default function Summary(props) {
   const { data } = props
   const col = (cat) => {
      const red = '#ff5757'
      const redT = '#FFF7F7'
      const yel = '#ffb01f'
      const yelT = '#FFFAF2'
      const grn = '#00bd91'
      const grnT = '#EFFFFB'
      const blu = '#1125d4'
      const bluT = '#EFF1FE'
      return cat.toLowerCase() === 'reaction'
         ? { color: red, backgroundColor: redT }
         : cat.toLowerCase() === 'memory'
         ? { color: yel, backgroundColor: yelT }
         : cat.toLowerCase() === 'verbal'
         ? { color: grn, backgroundColor: grnT }
         : { color: blu, backgroundColor: bluT }
   }
   const categoriesEl = data.map((cat) => {
      return <Category {...cat} styles={col(cat.category)} />
   })
   return (
      <div>
         <h3 className='greyed'>Summary</h3>
         <div className='cat-container'>{categoriesEl}</div>
      </div>
   )
}
