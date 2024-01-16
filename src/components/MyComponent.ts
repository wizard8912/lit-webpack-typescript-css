import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-component')
export default class MyComponent extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `;

  @property()
  name?: string = 'World';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
