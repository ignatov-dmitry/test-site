import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    // В AppServerModule должен быть импортирован AppModule
    // вместе с ServerModule из @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  // Так как главный загрузочный компонент не наследуется из
  // AppModule, то тут тут мы повторяем его подключение.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
