import YellowBall from '../bg/YellowBall'
import YellowBallDown from '../bg/YellowBallDown'
import RedBall from '../bg/RedBall'
import Sun from '../bg/Sun'

const Bg = () => {
   return (
      <>
         <YellowBall pos='hero' />
         <YellowBallDown />
         <RedBall pos='hero' />
         <Sun />
      </>
   )
}

export default Bg
