import {
  Container,
  Links,
  Title,
  LinkContainer,
  Link,
  LinkIcon,
  DrawerFooter,
  LogOutImg,
} from "./drawer.styles";
import { ReactComponent as Reports } from "./reports.svg";
import { ReactComponent as Requests } from "./requests.svg";
import { ReactComponent as Dashboard } from "./dashboard.svg";
import { ReactComponent as Logout } from "./logout.svg";
import { SecondaryHeading, TertiaryHeading } from "../../abstracts/headings";
export const Drawer = () => {
  return (
    <Container>
      <Title>TBayEat</Title>
      <Links>
        <LinkContainer to={`/vendor/`}>
          <LinkIcon>
            <Dashboard />
          </LinkIcon>
          <Link>Dashboard</Link>
        </LinkContainer>
        <LinkContainer to={`/vendor/reports`}>
          <LinkIcon>
            <Reports />
          </LinkIcon>
          <Link>Reports</Link>
        </LinkContainer>
        <LinkContainer to={`/vendor/requests`}>
          <LinkIcon>
            <Requests />
          </LinkIcon>
          <Link>Requests</Link>
        </LinkContainer>
      </Links>
      <DrawerFooter>
        <SecondaryHeading>Moez Ahmad</SecondaryHeading>
        <br />
        <TertiaryHeading>Vendor</TertiaryHeading>
        <LogOutImg>
          <Logout />
        </LogOutImg>
      </DrawerFooter>
    </Container>
  );
};
