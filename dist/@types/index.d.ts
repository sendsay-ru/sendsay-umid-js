declare const UMID: {
    get: () => Promise<string>;
    setKey: (key: string) => void;
};

export { UMID };
