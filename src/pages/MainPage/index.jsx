import React from "react";
import "./style.css";

const MainPage = () => {
  const logo = "https://byteex-task.s3.eu-north-1.amazonaws.com/LOGO.png";
  const headPhoto =
    "https://byteex-task.s3.eu-north-1.amazonaws.com/Group+6034.png";
  const about_photo =
    "https://byteex-task.s3.eu-north-1.amazonaws.com/Group+6036.png";

  return (
    <div className="mainPage">
      <div className="mainPageNotification">
        <p className="mainPageNotificationText">
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders {">"} $200 | easy 45 day return window.
        </p>
      </div>
      <div className="mainPageHeader">
        <img className="mainPageHeaderLogo" src={logo} alt="" />
        <div className="mainPageHeaderSides">
          <div className="mainPageHeaderLeft">
            <h1 className="mainPageHeaderTitle">
              Don’t apologize for being comfortable.
            </h1>
            <div className="mainPageHeaderAdvancements">
              <div className="mainPageHeaderAdvancementsSection">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                  <path
                    d="M15.5 5.5V26"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4999 21.2694C12.4486 21.2694 9.98071 18.8015 9.98071 15.7502C9.98071 12.6988 12.4486 10.231 15.4999 10.231"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25391 8.50439L9.92545 10.1759"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.25 15.75H7.61538"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25391 22.9962L9.92545 21.3247"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.5 13.03C16.4462 11.3585 18.2438 10.231 20.3017 10.231C20.4279 10.231 20.5462 10.2388 20.6723 10.2467C19.3556 10.9406 18.4646 12.3204 18.4646 13.9052C18.4646 16.1917 20.3175 18.0446 22.604 18.0446C23.8656 18.0446 24.9931 17.4769 25.75 16.586C25.34 19.2431 23.0613 21.2694 20.3017 21.2694C18.2438 21.2694 16.4462 20.1419 15.5 18.4704"
                    stroke="#15005B"
                    stroke-width="1.1"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="mainPageHeaderAdvancementsSectionText">
                  Beautiful, comfortable loungewear for day or night.
                </p>
              </div>
              <div className="mainPageHeaderAdvancementsSection">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                  <path
                    d="M11.3472 11.2403C11.3472 11.0091 11.5401 10.8217 11.7782 10.8217H21.855C21.9806 10.8217 22.1 10.875 22.1819 10.9675C22.2638 11.0601 22.3 11.1828 22.2811 11.3035L21.8506 14.0461C21.818 14.2533 21.6343 14.4018 21.425 14.4018C21.4034 14.4018 21.3815 14.4002 21.3595 14.3969C21.1241 14.3621 20.9624 14.1485 20.9983 13.9199L21.3532 11.659H11.7782C11.5401 11.659 11.3472 11.4715 11.3472 11.2403ZM14.6196 18.3779H10.7997L9.20705 9.34797C9.17161 9.14696 8.99221 9 8.7822 9H6.43103C6.19296 9 6 9.18743 6 9.41868C6 9.64993 6.19296 9.83735 6.43103 9.83735H8.41875L10.0114 18.8673C10.0473 19.0713 10.2296 19.2154 10.4357 19.2154C10.4598 19.2153 10.4844 19.2134 10.509 19.2093C10.5107 19.2089 10.5124 19.2087 10.5141 19.2083C10.5395 19.2129 10.5657 19.2152 10.5924 19.2152H14.6196C14.8577 19.2152 15.0506 19.0278 15.0506 18.7965C15.0506 18.5653 14.8577 18.3779 14.6196 18.3779ZM13.7865 21.3407V22.0837C13.7865 22.782 13.2016 23.3502 12.4826 23.3502C11.7636 23.3502 11.1787 22.782 11.1787 22.0837V21.3407C11.1787 20.6423 11.7636 20.0742 12.4825 20.0742C13.2015 20.0742 13.7865 20.6423 13.7865 21.3407ZM12.9244 21.3407C12.9244 21.1041 12.7262 20.9116 12.4826 20.9116H12.4825C12.239 20.9116 12.0408 21.1041 12.0408 21.3407V22.0837C12.0408 22.3203 12.239 22.5128 12.4825 22.5128C12.7262 22.5128 12.9244 22.3203 12.9244 22.0837V21.3407ZM24.9404 17.4357C24.6861 19.4206 23.6512 21.1904 22.0264 22.4192C20.659 23.4533 19.0115 24 17.3059 24C16.9848 24 16.6617 23.9806 16.3379 23.9414C16.0671 23.9086 15.7941 23.8611 15.5263 23.8003C15.3465 23.7595 15.2135 23.6121 15.1954 23.4336C15.1395 22.8812 15.147 22.3206 15.2179 21.7677C15.7431 17.6703 19.6023 14.7516 23.8205 15.2619C24.0916 15.2947 24.3646 15.3422 24.6321 15.403C24.8118 15.4438 24.9448 15.5912 24.9629 15.7695C25.019 16.3217 25.0114 16.8823 24.9404 17.4357ZM24.1286 16.1557C23.9906 16.1306 23.8519 16.1096 23.7138 16.0929C19.9677 15.6399 16.5398 18.232 16.0733 21.8712C16.0467 22.0788 16.0302 22.2875 16.0236 22.4963L19.9669 19.1406C20.1458 18.9882 20.4182 19.0056 20.5751 19.1796C20.7319 19.3535 20.714 19.6181 20.5349 19.7704L16.5909 23.1267C18.3556 23.3036 20.0924 22.8204 21.4967 21.7584C22.9398 20.667 23.859 19.0951 24.0849 17.3322C24.1351 16.9416 24.1497 16.5471 24.1286 16.1557Z"
                    fill="#01005B"
                    stroke="#01005B"
                    stroke-width="0.3"
                  />
                </svg>
                <p className="mainPageHeaderAdvancementsSectionText">
                  No wasteful extras, like tags or plastic packaging.
                </p>
              </div>
              <div className="mainPageHeaderAdvancementsSection">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#F9F0E5" />
                  <path
                    d="M9.27847 12.3002C10.6372 10.9827 11.7105 9.94096 14.6232 11.7996C16.0224 12.692 17.1509 13.0293 18.0897 13.0275C19.7346 13.0275 20.801 11.9946 21.7226 11.1013C21.8808 10.9459 21.9792 10.727 21.9969 10.491C22.0146 10.2551 21.9502 10.0206 21.8175 9.83731C21.7527 9.74737 21.6726 9.67302 21.582 9.61864C21.4913 9.56427 21.3919 9.53098 21.2897 9.52074C21.1875 9.5105 21.0844 9.52353 20.9867 9.55904C20.889 9.59456 20.7986 9.65185 20.7208 9.72751C19.3629 11.0468 18.2888 12.0886 15.3761 10.2282C11.5277 7.77491 9.7249 9.52285 8.27672 10.9282C8.11864 11.0838 8.02041 11.3027 8.00284 11.5387C7.98527 11.7746 8.04975 12.009 8.18261 12.1922C8.24741 12.282 8.32751 12.3562 8.41815 12.4104C8.50879 12.4646 8.60814 12.4977 8.71032 12.5078C8.8125 12.5178 8.91543 12.5047 9.01302 12.469C9.11061 12.4334 9.20087 12.376 9.27847 12.3002ZM20.7208 14.2133C19.3629 15.5309 18.2888 16.5744 15.3761 14.714C11.5277 12.259 9.7249 14.0078 8.27672 15.4123C8.11864 15.5678 8.02041 15.7868 8.00284 16.0227C7.98527 16.2587 8.04975 16.4931 8.18261 16.6762C8.2473 16.7662 8.32731 16.8405 8.4179 16.8949C8.50848 16.9492 8.60781 16.9825 8.70999 16.9927C8.81217 17.003 8.91513 16.99 9.01278 16.9545C9.11043 16.919 9.20077 16.8617 9.27847 16.786C10.6372 15.4676 11.7105 14.4259 14.6232 16.2836C16.0224 17.1778 17.1509 17.5133 18.0897 17.5133C19.7346 17.5133 20.801 16.4804 21.7226 15.5853C21.8809 15.4302 21.9794 15.2114 21.9971 14.9755C22.0148 14.7397 21.9504 14.5053 21.8175 14.3222C21.7527 14.2323 21.6726 14.1579 21.5819 14.1035C21.4913 14.0491 21.3918 14.0159 21.2896 14.0057C21.1873 13.9956 21.0843 14.0087 20.9866 14.0444C20.8889 14.08 20.7985 14.1375 20.7208 14.2133ZM20.7208 18.6982C19.3629 20.0175 18.2888 21.0593 15.3761 19.2007C11.5277 16.7456 9.7249 18.4936 8.27672 19.899C8.11864 20.0545 8.02041 20.2734 8.00284 20.5094C7.98527 20.7453 8.04975 20.9797 8.18261 21.1629C8.24735 21.2528 8.32742 21.3271 8.41806 21.3814C8.50871 21.4356 8.60808 21.4688 8.71029 21.4789C8.8125 21.489 8.91546 21.4757 9.01306 21.44C9.11066 21.4043 9.20092 21.3468 9.27847 21.271C10.6372 19.9534 11.7105 18.9126 14.6232 20.7703C16.0224 21.6627 17.1509 22 18.0897 22C19.7346 22 20.801 20.9653 21.7226 20.072C21.8808 19.9166 21.9792 19.6977 21.9969 19.4617C22.0146 19.2258 21.9502 18.9913 21.8175 18.808C21.7527 18.7182 21.6726 18.6439 21.5819 18.5896C21.4913 18.5353 21.3919 18.5021 21.2897 18.4918C21.1875 18.4816 21.0845 18.4946 20.9868 18.53C20.8891 18.5655 20.7987 18.6227 20.7208 18.6982Z"
                    fill="#01005B"
                  />
                </svg>
                <p className="mainPageHeaderAdvancementsSectionText">
                  Our signature fabric is incredibly comfortable — unlike
                  anything you’ve ever felt.
                </p>
              </div>
            </div>
            <div className="mainPageHeaderButton">
              <p className="mainPageHeaderButtonText">Customize Your Outfit</p>
              <svg
                width="23"
                height="10"
                viewBox="0 0 23 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="mainPageHeaderRight">
            <img className="mainPageHeaderImage" src={headPhoto} alt="" />
          </div>
        </div>
      </div>
      <div className="mainPageAbout">
        <div className="mainPageAboutImageContainer">
          <img
            src={about_photo}
            alt="Woman stretching in robe"
            className="mainPageAboutImage"
          />
        </div>
        <div className="mainPageAboutTextContent">
          <h2 className="mainPageAboutTextContentTitle">Be your best self.</h2>
          <div className="mainPageAboutTextContentContainer">
            <p className="intro">
              Hi! My name’s [Insert Name], and I founded [Insert] in ____.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>{" "}
            <p>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.
            </p>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
            </p>
            <p>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
            </p>
            <p>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
            </p>
            <p>Cras mattis varius mollis.</p>
          </div>
          <div className="mainPageHeaderButton">
            <p className="mainPageHeaderButtonText">Customize Your Outfit</p>
            <svg
              width="23"
              height="10"
              viewBox="0 0 23 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1072 10L23 5.00003L18.1072 0L16.6372 1.5022L19.0205 3.93781L0 3.93781V6.06226L19.0205 6.06226L16.6372 8.4978L18.1072 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
