/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
      }
      
      th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }
      
      th {
        background-color: #f2f2f2;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       * @type {string}
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>25</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Amy</td>
            <td>32</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>28</td>
            <td>Australia</td>
          </tr>
          <tr>
            <td>Lisa</td>
            <td>19</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>David</td>
            <td>35</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Sarah</td>
            <td>30</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Michael</td>
            <td>22</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Emily</td>
            <td>27</td>
            <td>Australia</td>
          </tr>
          <tr>
            <td>Thomas</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Sophia</td>
            <td>31</td>
            <td>Germany</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name {string} The name to say "Hello" to
   * @returns {string} A greeting directed at `name`
   */
  sayHello(name) {
    return `Hello, ${name}`;
  }
}

window.customElements.define('my-element', MyElement);
