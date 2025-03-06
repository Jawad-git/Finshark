interface ImportMetaEnv {
  readonly VITE_REACT_APP_API_KEY: string;
  readonly VITE_REALM: string;
  readonly VITE_CLIENT_ID: string;
 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}