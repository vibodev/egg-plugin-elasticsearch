import type { Client, ClientOptions } from '@elastic/elasticsearch/api/new'

declare module 'egg' {
  interface Application {
    elasticsearch: Client & Singleton<Client>
  }
  interface Context {
    elasticsearch: Client & Singleton<Client>
    es: Client & Singleton<Client>
  }

  interface EggAppConfig {
    elasticsearch: ClientOptions
  }
}
