export const getEnv = (key, defaultValue) => {
    if (process.env[`REACT_APP_${key.toUpperCase()}`])
        return process.env[`REACT_APP_${key.toUpperCase()}`];
    if (defaultValue) return defaultValue;
    throw new Error(`Must define ${key}`);
}
