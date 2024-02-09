import { Dashboard, Money } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

type ListProp = {
  id: string;
  title: string;
  Icon: ReactNode;
  handleClick: () => void;
};

const SidebarList = () => {
  const navigate = useNavigate();

  const List1: ListProp[] = [
    {
      id: "dashboard",
      title: "Dashboard",
      Icon: <Dashboard />,
      handleClick: () => navigate("/"),
    },
    {
      id: "prices",
      title: "Prices",
      Icon: <Money />,
      handleClick: () => navigate("/prices"),
    },
  ];

  return (
    <List>
      {List1.map(({ id, title, Icon, handleClick }) => (
        <ListItem key={id} disablePadding onClick={handleClick}>
          <ListItemButton>
            <ListItemIcon>{Icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarList;
