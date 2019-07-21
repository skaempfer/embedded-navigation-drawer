export class App {
  private menuReference: HTMLElement;
  private static readonly OpenStyle: string = "main__menu--open";

  private toggleMenu(): void {
    const isOpen = this.menuReference.classList.contains(App.OpenStyle);
    isOpen
      ? this.menuReference.classList.remove(App.OpenStyle)
      : this.menuReference.classList.add(App.OpenStyle);
  }
}
