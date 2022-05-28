import React, { ComponentClass, FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

type ComponentType<T> = FunctionComponent<T> | ComponentClass<T>;

export default class InkDropWrapper {
  private wrapperId = 'inkdrop-wrapper';

  private create() {
    const el = document.createElement('div');
    el.setAttribute('id', this.wrapperId);
    el.setAttribute('style', 'top: 0; position: absolute; padding: 24px;');
    return el;
  }

  public install(location: HTMLElement) {
    location.appendChild(this.create());
  }

  public render<T = Record<string, never>>(
    component: ComponentType<T>,
    props: T,
  ) {
    const element = React.createElement(component, props);
    const container = this.getPlayerContainer();

    if (container) {
      ReactDOM.render(element, this.getPlayerContainer());
    }
  }

  public unmount() {
    const container = this.getPlayerContainer();

    if (container) {
      ReactDOM.unmountComponentAtNode(container);
    }
  }

  public isInstalled() {
    return !!document.getElementById(this.wrapperId);
  }

  public getPlayerContainer() {
    return document.getElementById(this.wrapperId);
  }
}
