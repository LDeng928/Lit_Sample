/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {fetchTableData} from './data-helpers.js';

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
        color: black;
        font-size: 24px;
      }

      th,
      td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }

      .bg-grey {
        background-color: lightgrey;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The number of people in the table.
       * @type {number}
       */
      count: {type: Number},

      /**
       * Array of people to show in table
       * @type {Array}
       */
      people: {type: Array},

      /**
       * String of the search term
       * @type {String}
       */
      searchTerm: {type: String},

      /**
       * String copy of the search term
       * @type {String}
       */
      inputValue: {type: String},
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.people = [];
    this.searchTerm = '';
    this.inputValue = '';
  }

  _handleSearch(e) {
    e.preventDefault();
    this.searchTerm = this.inputValue;
    return this.people;
  }

  _handleKeyup(e) {
    if (!e.target.value.trim()) {
      this.searchTerm = '';
    }
  }

  updateInputValue(e) {
    this.inputValue = e.target.value;
  }

  get filteredPeople() {
    if (!this.searchTerm.trim()) {
      return this.people;
    }
    const lowercaseSearchTerm = this.searchTerm.toLowerCase();
    return this.people.filter((person) =>
      Object.values(person).some((val) =>
        String(val).toLowerCase().includes(lowercaseSearchTerm)
      )
    );
  }

  async firstUpdated() {
    this.people = await fetchTableData();
    this.count = this.people.length;
  }

  createARow(person, index) {
    return html`<tr class="${index % 2 === 0 ? null : 'bg-grey'}">
      <td>${person.Name}</td>
      <td>${person.Age}</td>
      <td>${person.Country}</td>
    </tr>`;
  }

  render() {
    return html`
      <h1>Users table - ${new Date(Date.now()).toUTCString()}</h1>
      <form @submit=${this._handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          .value="${this.inputValue}"
          @input="${this.updateInputValue}"
          @keyup="${this._handleKeyup}"
        />
        <button type="submit">Search</button>
      </form>
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
          ${this.filteredPeople.map((person, index) => {
            return this.createARow(person, index);
          })}
        </tbody>
      </table>
    `;
  }
}

window.customElements.define('lit-component', LitComponent);
