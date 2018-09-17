
function TopNavComponent() {

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#">Features</a>
        <a className="p-2 text-dark" href="#">Enterprise</a>
        <a className="p-2 text-dark" href="#">Support</a>
        <a className="p-2 text-dark" href="#">Pricing</a>
      </nav>
      <a className="btn btn-outline-primary" href="#">Sign up</a>
    </div>
  );

}


function PricingComponent() {
  return (
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Pricing</h1>
      <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
    </div>
  );
}


function Card(props) {

  const data = props.items;
  const liItems = data.map((item, index) => {
    return <li id={index}>{iten}</li>
  });

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{props.label}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">${props.price} <small className="text-muted">/ mo</small></h1>
        <ul className="list-unstyled mt-3 mb-4">
          {liItems}
        </ul>
        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
      </div>
    </div>
  );
}

function CardWrapper() {
  return (
    <div className="card-deck mb-3 text-center">
      <Card label='Free' price='0' />
      <Card label='Profession' price='15' />
      <Card label='Enterprice' price='29' />
    </div>
  );

}



function FooterComponent() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <img className="mb-2" src="" alt="" width="24" height="24" />
          <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Cool stuff</a></li>
            <li><a className="text-muted" href="#">Random feature</a></li>
            <li><a className="text-muted" href="#">Team feature</a></li>
            <li><a className="text-muted" href="#">Stuff for developers</a></li>
            <li><a className="text-muted" href="#">Another one</a></li>
            <li><a className="text-muted" href="#">Last time</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Resource</a></li>
            <li><a className="text-muted" href="#">Resource name</a></li>
            <li><a className="text-muted" href="#">Another resource</a></li>
            <li><a className="text-muted" href="#">Final resource</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Team</a></li>
            <li><a className="text-muted" href="#">Locations</a></li>
            <li><a className="text-muted" href="#">Privacy</a></li>
            <li><a className="text-muted" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function App(props) {
  return (
    <div className="container">
      <TopNav />
      <PricingComponent />
      <CardWrapper />
      <FooterComponent />
    </div>
  );

}
