import { ListItem } from "../UI";

import { Link, animateScroll as scroll } from "react-scroll";

const MenuItem = ({linkUrl, linkName}) => {
  return(
    <ListItem>
      <Link 
        activeClass="active"
        to={linkUrl}
        spy={true}
        smooth={true}
        offset={-60}
        duration={250}
      >{linkName}</Link>
    </ListItem>
  )
}

export default MenuItem;