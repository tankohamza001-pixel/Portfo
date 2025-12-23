export default function AboutUs() {
  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">
        <h3></h3>
        <h4>About Me</h4>
      </div>
      <div className="row about justify-content-center align-items-center text-light">
        <div className="col-lg-8 mt-4">
          <p>
            Welcome to Mufti Hamxha Collection, where tradition meets contemporary
            fashion. Founded by Mufti Hamxha, our brand is dedicated to crafting
            exquisite jallabiyas that celebrate cultural heritage while embracing
            modern design sensibilities.
           
          </p>
          <p>
              Fashion is not something that exist in dresses only.
              Fashion is in the sky, in the street,fashion has to do with ideas,
              the way we live, What is happening
            </p>
            
          
            <div className="card p-2 bg-opacity-75">
                  <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            
            <h5>Elegance starts with a perfect jallabiya </h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Brand Building</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Where tradition meets premium style</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Classic look, timeless comfort</h5>
          </div>
          <div className="d-flex flex-row gap-4"></div>
            </div>
        
        </div>
        <div className="col-lg-4">
          <img src="/logo.jpg" className="img-fluid rounded"/>
        </div>
      </div>
      
    </>
  );
}
