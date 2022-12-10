import { Navbar, NavbarBrand } from "reactstrap";

export default function BlackNav() {
  return (
    <>
      <Navbar className="blacknav" color="#900C3F " dark>
        <NavbarBrand className="navtitle">
          <h1 className="navtext">Shop in style</h1>
          <div className="navtext2 text-muted">
            With this shop hompeage template
          </div>
        </NavbarBrand>
      </Navbar>
    </>
  );
}
