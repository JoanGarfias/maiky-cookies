import type { DirectiveBinding, ObjectDirective } from 'vue';

interface ExtendedHTMLElement extends HTMLElement {
  __clickOutside__?: (e: MouseEvent) => void;
}

const clickOutside: ObjectDirective = {
  mounted(el: ExtendedHTMLElement, binding: DirectiveBinding) {
    const handler = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };

    el.__clickOutside__ = handler;
    document.addEventListener('click', handler);
  },

  unmounted(el: ExtendedHTMLElement) {
    if (el.__clickOutside__) {
      document.removeEventListener('click', el.__clickOutside__);
      delete el.__clickOutside__;
    }
  }
};

export default clickOutside;
