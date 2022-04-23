import { writable } from "svelte/store";

export const toasts = writable([]);

export function addToast(msg, titel = 'Info', type = "info", removeAfter = 5000) {

    const id = `${new Date().valueOf()}-${msg}`;
    toasts.update((all) => [
      {
        id,
        msg,
        titel,
        type,
        removeAfter,
      },
      ...all,
    ]);
  
    setTimeout(() => {
      removeToast(id);
    }, removeAfter);
  
    // 4. return the unique identifier
    return id;
  }

export function removeToast(id) {
  toasts.update((all) => all.filter((toast) => toast.id !== id));
}

  