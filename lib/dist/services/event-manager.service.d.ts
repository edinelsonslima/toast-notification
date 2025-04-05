export default class EventManager<TEvents extends Record<keyof TEvents, TEvents[keyof TEvents]>> {
    private listeners;
    on<TKey extends keyof TEvents>(event: TKey, listener: (parameters: TEvents[TKey]) => void): void;
    emit<TKey extends keyof TEvents>(event: TKey, payload: TEvents[TKey]): void;
    removeListener<TKey extends keyof TEvents>(event: TKey, listenerToRemove: (parameters: TEvents[TKey]) => void): void;
}
