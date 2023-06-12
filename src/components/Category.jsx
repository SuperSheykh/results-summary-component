export default function Category(props) {
   const { category, score, icon, styles } = props
   const { color, backgroundColor } = styles

   return (
      <div className='category' style={{ backgroundColor: backgroundColor }}>
         <div className='cat-title'>
            <img
               style={{ color: color }}
               src={icon}
               alt='icon for the category'
            />
            <p style={{ color: color }} className='cat'>
               {category}
            </p>
         </div>
         <p className='score'>
            <span className='score'>{score}</span> / 100
         </p>
      </div>
   )
}
