import { ListItem } from "../UI";
import { LinkItem } from "../UI";

const MenuItem = ({linkUrl, linkName}) => {
  return(
    <ListItem>
      <LinkItem href={linkUrl}>{linkName}</LinkItem>
    </ListItem>
  )
}

export default MenuItem;