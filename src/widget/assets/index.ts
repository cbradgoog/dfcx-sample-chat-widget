/// <reference path="imports.d.ts"/>
import sendButton from './send-button.svg';
import mapIcon from './google-maps.svg';
import backIcon from './back.svg';
import collapseArrow from './collapse-arrows.svg';
// import messageIcon from './message.svg';
// EXPORT MAP ICON TO BE USED IN THE LIST PAGE
export const mapIconItem = mapIcon;

import globalStyles from './styles.scss';
import chatWidgetCSS from './chat-widget.scss';
import threeDotsCSS from './three-dots.scss';
import chatHeaderWidgetCSS from './chat-header-widget.scss';
import chatLoaderWidgetCSS from './chat-loader-widget.scss';
import chatUserWidgetCSS from './chat-user-widget.scss';
import chatBotWidgetCSS from './chat-bot-widget.scss';
import chatInputWidgetCSS from './chat-input-widget.scss';
import chatChipsWidgetCSS from './chat-chips-widget.scss';
import chatListWidgetCSS from './chat-list-widget.scss';
import chatRichChipsWidgetCSS from './chat-rich-chips-widget.scss';
import chatImageWidgetCSS from './chat-image-widget.scss';
import chatLocationPickerWidgetCSS from './chat-location-picker-widget.scss';
import chatMenuChipsWidgetCSS from './chat-menu-chips-widget.scss';
import chatMenuListWidgetCSS from './chat-menu-list-widget.scss';

export const chatFrameTemplate = document.createElement('template');
chatFrameTemplate.innerHTML = `
  <style>
  ${globalStyles}
  </style>
  <style>
  ${threeDotsCSS}
  </style>
  <style>
  ${chatWidgetCSS}
  </style>
  <section class="chat-main-container">

    <section class="chat-wrapper">

      <section class="landing-screen">


      </section>

      <section  class="chat-main-wrapper popup">
        <chat-header-widget></chat-header-widget> 
        <section class="chat-messages-container">

          <div>
            
          </div>

          <!-- <chat-loader-widget class="chat-loading"></chat-loader-widget> -->
          <div style="margin-left:20px" class="chat-loading dot-elastic"></div>
          <div  class="trick-to-scroll-here"></div>

        </section>
        <chat-input-widget></chat-input-widget>
        <div class="bottom-curved"></div>
        <div class="bottom-navigator"></div>
        </section>


      <!-- TODO : REDESIGN SUGGESSTION CHIPS -->
      <section class="chat_button_container">
      <p>
      Hello 👋🏾, <br>
      Welcome, how may i help you.
      </p>

        <button class="chat-toggle-btn" 
          aria-label="chat toggle icon">
          
          <span style="height:60px; width:60px" class="logo">
           
          </span>

        </button>

      </section>

    </section>
  </section>


  `;


export const chatHeaderTemplate = document.createElement('template');
chatHeaderTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatHeaderWidgetCSS}
  </style>

  <section class="chat-header-container">


    <div class="back-button">
    ${backIcon}
    </div>
    <div class="logo"></div>

    <h3>Virtual Chat</h3>

    <div class="spacer"></div>


    <div class="collapse-arrow" >
    ${collapseArrow}
    </div>
  </section>

  `;

export const chatLoaderTemplate = document.createElement('template');
chatLoaderTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatLoaderWidgetCSS}
  </style>

  <main class="loader">
      <div class="item-1"></div>
      <div class="item-2"></div>
      <div class="item-3"></div>
      <div class="item-4"></div>
      <div class="item-5"></div>
  </main>

  `;


export const chatUserTemplate = document.createElement('template');
chatUserTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatUserWidgetCSS}
  </style>

  <section class="chat-user-message-container popup-chat">

    <p>Here is a message from the user</p>

  <!-- <img src="https://avatars.githubusercontent.com/u/16451643?v=4" alt="" srcset=""> -->
    <img src="https://icons-for-free.com/iconfiles/png/512/person-1324760545186718018.png" alt="" srcset="">

  </section>

  `;


export const chatBotTemplate = document.createElement('template');
chatBotTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatBotWidgetCSS}
  </style>

  <section class="chat-bot-message-container popup-chat">

    <div></div>

    <p>Here is a message from the Bot </p>
  </section>

  `;


export const chatInputTemplate = document.createElement('template');
chatInputTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatInputWidgetCSS}
  </style>

  <section class="chat-input-container">

    <input matInput autocomplete="off"   type="text"
      class="chat-input-box" placeholder="ask me somthing">

      <div class="send-button">
  ${sendButton}
    </div>

  </section>


  `;

  
  export const chatMenuChipsTemplate = document.createElement('template');
  chatMenuChipsTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatMenuChipsWidgetCSS}
  </style>

  <section class="chat-widget-chip-container">

  </section>
  `;

  
export const chatMenuListTemplate = document.createElement('template');
chatMenuListTemplate.innerHTML = `

  <style>
     ${globalStyles}
  </style>
  <style>
    ${chatMenuListWidgetCSS}
  </style>


  <section class="chat-widget-list-container">
 
    <ol  style="margin: 5px 5px 5px 50px; cursor : pointer" class="list-group list-group-numbered">
      
    </ol>

  </section>
  `;

export const chatChipsTemplate = document.createElement('template');
chatChipsTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatChipsWidgetCSS}
  </style>

  <section class="chat-widget-chip-container">

  </section>
  `;

export const chatRichChipsTemplate = document.createElement('template');
chatRichChipsTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatRichChipsWidgetCSS}
  </style>

  <section class="chat-widget-chip-container">

  
  </section>

  `;

export const chatImageTemplate = document.createElement('template');
chatImageTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatImageWidgetCSS}
  </style>

  <section class="chat-widget-image-container popup-chat">

  </section>

  `;

export const chatLocationPickerTemplate = document.createElement('template');
chatLocationPickerTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatLocationPickerWidgetCSS}
  </style>

  <section class="chat-widget-location-picker-container popup-chat">

  
    <input id="pac-input" type="text" placeholder="Enter a search location" />

  <div id="map"></div>
  <div id="infowindow-content">
  <span id="place-name" class="title"></span><br />
  <span id="place-address"></span>
  </div>


    <section class="chat-widget-location-picker-chips">
        <div id='current-location'>Use Current Location</div>
        <div id="selected-location">Use Selected Location</div>
    </section>

  </section>

  `;

export const chatListTemplate = document.createElement('template');
chatListTemplate.innerHTML = `

  <style>
  ${globalStyles}
  </style>
  <style>
  ${chatListWidgetCSS}
  </style>

  <section class="chat-widget-list-container">
    <section>
     <div class="info">
        <h5 class="heading">Tema Community 25</h5>
        <p class="subheading">
        Tema Community 25 Mall
        </p>
      </div>

      <div class="icon">${mapIcon}</div>
    </section>

  </section>
  `;

export const chatListItemTemplate = document.createElement('template');
chatListItemTemplate.innerHTML = `

  <section class="chat-widget-list-container">
    <section>
    <div class="info">
        <h5 class="heading">Tema Community 25</h5>
        <p class="subheading">
        Tema Community 25 Mall
        </p>
      </div>

      <div class="icon">${mapIcon}</div>
    </section>
  </section>
  `;