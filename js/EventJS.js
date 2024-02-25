const listeners = {};

export const Event = {
  listen: (event_name, callback) => {
    if (!listeners[event_name]) listeners[event_name] = {};
    const event_uuid = crypto.randomUUID();
    listeners[event_name][event_uuid] = callback;
    return event_uuid;
  },
  unlisten: (event_uuid) => {
    for (let event_name in listeners) {
      if (!listeners[event_name][event_uuid]) continue;
      delete listeners[event_name][event_uuid];
    }
  },
  emit: (event_name, data) => {
    if (!listeners[event_name]) return;
    for (let event_uuid in listeners[event_name]) {
      listeners[event_name][event_uuid](data);
    }
  },
};
