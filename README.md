# EventJS

EventJS es una librería ligera de JavaScript para gestionar eventos en una página web.

## Escuchar eventos

```javascript
import { Event } from "https://cdn.devetty.es/EventJS/js";

const event_uuid = Event.listen("test", (e) => console.log(e));
```

## Emitir eventos

```javascript
Event.emit("test", "a");
```

## Dejar de escuchar eventos

```javascript
Event.unlisten(event_uuid);
```
