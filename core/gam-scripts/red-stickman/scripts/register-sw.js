"use strict";
window.C3_RegisterSW = async function() {
  if (navigator.serviceWorker) try {
    const e = await navigator.serviceWorker.register("sw.js", {
      scope: "./"
    });
    console.info("Registered service worker on " + e.scope)
  } catch (e) {
    console.warn("Failed to register service worker: ", e)
  }
};