/*
 * Kill switch, not a real service worker.
 *
 * TODO(template): this file is a kill-switch service worker kept as an example.
 * If this origin ever served a different app whose service worker went stale,
 * visitors can get stuck on a precached shell whose assets no longer exist,
 * and reloading does not help because the stale worker
 * intercepts the reload too.
 *
 * A page script cannot reach those people: the worker replaces the page before
 * any of our HTML runs. The browser does refetch the registered script on
 * navigation, so replacing that script with one that deletes itself is the way
 * out. Delete when the traffic from that window has aged out (mid-2027 say),
 * since by then anyone still affected has long since cleared their storage.
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();

      // Unregistering does not repaint what is already on screen, so the user
      // would keep staring at the app's error card until they navigated by
      // hand. Reload every open tab on this origin now that nothing is
      // intercepting it.
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});

// No fetch handler on purpose. Without one the browser goes straight to the
// network for every request while this worker lives out its short life.
