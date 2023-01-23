import { List } from "../UI";
import MenuItem from "../MenuItem/MenuItem";

const MenuList = () => {
  const menuLinks = [
    // {linkName: "Apresentação", linkUrl: '#apresentacao'},
    // {linkName: "Projetos", linkUrl: '#projetos'},
    // {linkName: "Experiência Profissional", linkUrl: '#experiencia-profissional'},
    // {linkName: "Contato", linkUrl: '#contato'},
    {linkName: "Apresentação", linkUrl: 'apresentacao'},
    {linkName: "Projetos", linkUrl: 'projetos'},
    {linkName: "Experiência Profissional", linkUrl: 'experiencia-profissional'},
    {linkName: "Contato", linkUrl: 'contato'},
  ]

  return (
    <List>
      {
        menuLinks.map(item => (
          <MenuItem key={item.linkUrl} linkUrl={item.linkUrl} linkName={item.linkName} />
        ))
      }
    </List>
  )
}

export default MenuList;