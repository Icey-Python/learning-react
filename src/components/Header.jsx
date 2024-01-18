import PropTypes from 'prop-types'
import Button from "./Button"
//handle params -> props
const Header = ({title,color}) => {
  const logger = ()=>{
    console.log('button mother fuckin clicked!')
  }
  return (
   <header className='header'>
      <h1 style={{'color':color}}>{title}</h1>
      <Button color="green" text="Add" onClick={logger}/>
   </header>
  )
  }

Header.defaultProps={
  title:"Task Tracker",
  color:'black',
}
//should be kept as is lower case p 
Header.propTypes ={
  title:PropTypes.string.isRequired,
}

export default Header
