import React from "react";

function References() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Credits & References</h1>

      <div className="accordion" id="referencesAccordion">
        {/* Images Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseImages"
              aria-expanded="true"
              aria-controls="collapseImages"
            >
              Image Credits
            </button>
          </h2>
          <div
            id="collapseImages"
            className="accordion-collapse collapse show"
            data-bs-parent="#referencesAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    href="https://pngtree.com/freepng/mountain-icon-logo-design-template-vector_5962915.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mountain Icon from PNGTree
                  </a>
                </li>
                {/* Add more image credits here */}
                <li className="mb-3">[Add your image credit...]</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Videos Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseVideos"
              aria-expanded="false"
              aria-controls="collapseVideos"
            >
              Video Credits
            </button>
          </h2>
          <div
            id="collapseVideos"
            className="accordion-collapse collapse"
            data-bs-parent="#referencesAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="mb-3">[Add video credits...]</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Icons Section */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseIcons"
              aria-expanded="false"
              aria-controls="collapseIcons"
            >
              Icon Credits
            </button>
          </h2>
          <div
            id="collapseIcons"
            className="accordion-collapse collapse"
            data-bs-parent="#referencesAccordion"
          >
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    href="https://www.flaticon.com/free-icons/sushi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sushi icons created by Wahyoe Joeni - Flaticon
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href="https://www.flaticon.com/free-icons/sushi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sushi icons created by Freepik - Flaticon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default References;
