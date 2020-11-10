import padlock from './lock.svg';
import close from './close.svg';

const icons = { padlock, close };
function findIcons(iconName) {
  return icons[iconName];
}
export { icons, findIcons };
