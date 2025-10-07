export const storageService = {
  get<T>(key: string, defaultValue: T): T {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value) as T;
      } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error);
        return defaultValue;
      }
    }
    return defaultValue;
  },

  set<T>(key: string, value: T): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  },

  remove(key: string): void {
    localStorage.removeItem(key);
  },
};
