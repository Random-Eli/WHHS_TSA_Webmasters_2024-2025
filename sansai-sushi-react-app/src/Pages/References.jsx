import React from "react";
import "./References.css";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
function References() {
  return (
    <div className="references-page">
      <div className="container mt-4">
        <h1 className="mb-4">Credits & References</h1>

        <div
          className="accordion references-accordion"
          id="referencesAccordion"
        >
          {/* contract sign */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePDF"
              >
                Legal Documents
              </button>
            </h2>
            <div id="collapsePDF" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <a
                  href="/Student Copyright Checklist.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open Copyright Checklist (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* work log */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePDF"
              >
                Work Log
              </button>
            </h2>
            <div id="collapsePDF" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <a
                  href="/Webmasters Work Log.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open Website Work Log (PDF)
                </a>
              </div>
            </div>
          </div>

          {/* images section */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseImages"
              >
                Image Credits
              </button>
            </h2>
            <div id="collapseImages" className="accordion-collapse collapse">
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/users/takedahrs-12657/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4165038"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image by takedahrs - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/photos/ramen-vegan-meal-delicious-6498372/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Vegan Ramen - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/users/hot-sun-7750806/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5066737"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image by hot-sun - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/users/juno1412-7661763/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5579023"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image by JUNO KWON - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/users/omansang-1080391/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1971148"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image by omansang - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/users/sasint-3639875/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1822530"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image by Sasin Tipchai - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/users/jggrz-7998824/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4959723"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image by Jürgen - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/users/deltaworks-37465/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=636870"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image by Kohji Asakawa - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/cozy-japanese-style-restaurant-interior-with-wooden-decor-29888413/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Photo by Markus Winkler - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/photograph-of-a-storefront-5765839/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Storefront Photo - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://pixabay.com/photos/healthy-breakfast-food-dish-meal-7213383/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Healthy Breakfast - Pixabay
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/person-holding-chopsticks-8951203/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chopsticks Photo - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/close-up-photo-of-sashimi-3298598/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sashimi Photo - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/gourmet-asian-dish-8112999/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Asian Dish Photo - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/an-assorted-sushi-on-a-white-plate-10163251/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sushi Plate Photo - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/food-on-plate-with-sauce-3297878/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sushi with Sauce Photo - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/various-rolls-on-plate-in-restaurant-6310247/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Variety Sushi Rolls Photo - Pexels
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.pexels.com/photo/gray-wallpaper-11285435/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Gray Wallpaper - Pexels
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* icon section*/}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseIcons"
              >
                Icon Credits
              </button>
            </h2>
            <div id="collapseIcons" className="accordion-collapse collapse">
              <div className="accordion-body">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a
                      href="https://pngtree.com/freepng/mountain-icon-logo-design-template-vector_5962915.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mountain Icon - PNGTree
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.flaticon.com/free-icons/sushi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sushi icons by Wahyoe Joeni - Flaticon
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="https://www.flaticon.com/free-icons/sushi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sushi icons by Freepik - Flaticon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default References;
