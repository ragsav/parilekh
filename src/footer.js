import React from 'react'

function Footer() {
    
        return(<div class="parallax">
        <div class="footer">
          <div class="row2">
            <div class="column2">
              <p class="textbg">Create with us</p>
              <p class="about">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <a class="social" href="https://www.w3schools.com">
              <img
                border="0"
                alt="Instagram"
                src={require("./insta.png")}
                width="50px"
                height="50px"
              />
            </a>
            <a class="social" href="https://www.w3schools.com">
              <img
                border="0"
                alt="Facebook"
                src="./facebook.png"
                width="50px"
                height="50px"
              />
            </a>
          </div>
        </div>
      </div>);
    
}

export default Footer;