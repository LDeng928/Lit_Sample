/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class LitComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        font-family: Calibri;
      }
      
      table {
        border-collapse: collapse;
        width: 100%;
      }
      
      thead {
        color: darkgray;
        font-size: 24px;
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
       * The number of people in the table.
       * @type {number}
       */
      count: { type: Number },

      /**
       * Array of people to show in table
       * @type {Array}
       */
      people: { type: Array },
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.people = [];
  }

  _handleSearch(e) {
    const searchTerm = e.target.value;
    // fill in rest here to filter items in search
  }

  render() {
    return html`
      <h1>Users table - ${new Date(Date.now()).toUTCString()}</h1>
      <input type="text" placeholder="Search..." @input="${this._handleSearch}" />
      <span>User Count: ${this.count}</span>
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
          <tr>
            <td>Dromas</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Shmopas</td>
            <td>31</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Glopas</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Rodnas</td>
            <td>31</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Value</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Balena</td>
            <td>31</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Popope</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Nana</td>
            <td>31</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Grandpa</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Grandma</td>
            <td>31</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Neena</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Gladiola</td>
            <td>31</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Canda</td>
            <td>31</td>
            <td>Germany</td>
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
          <tr>
            <td>Thomas</td>
            <td>24</td>
            <td>UK</td>
          </tr>
          <tr>
        </tbody>
      </table>
    `;
  }
}

window.customElements.define('lit-component', LitComponent);
