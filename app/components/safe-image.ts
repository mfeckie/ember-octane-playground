import Component from '@glimmer/component';

interface SafeImageArgs {}

export default class SafeImage extends Component<SafeImageArgs> {
  fallbackImage(event: ErrorEvent) {
    const target = event.target as HTMLImageElement;

    target.src = "https://picsum.photos/200/300";
  }
}
