type TEnv = string | number | undefined;

type TServer = {
  port: TEnv,
  killTimeout: TEnv;
};

type TSqlDB = {
  user: TEnv,
  host: TEnv,
  port: TEnv,
  pass: TEnv,
  name: TEnv,
  type: TEnv,
};


type TConfig = {
  server: TServer;
  sqlDb: TSqlDB;
};


export { TConfig, TEnv }
