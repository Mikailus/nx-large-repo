import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { Childlib0Module } from '@largerepo/lib0';
// import { Childlib1Module } from '@largerepo/lib1';
// import { Childlib2Module } from '@largerepo/lib2';
// import { Childlib3Module } from '@largerepo/lib3';
// import { Childlib4Module } from '@largerepo/lib4';
// import { Childlib5Module } from '@largerepo/lib5';
// import { Childlib6Module } from '@largerepo/lib6';
// import { Childlib7Module } from '@largerepo/lib7';
// import { Childlib8Module } from '@largerepo/lib8';
// import { Childlib9Module } from '@largerepo/lib9';
// import { Childlib0Module as Childlib10Module } from '@largerepo/lib10';
// import { Childlib1Module as Childlib11Module } from '@largerepo/lib11';
// import { Childlib2Module as Childlib12Module } from '@largerepo/lib12';
// import { Childlib3Module as Childlib13Module } from '@largerepo/lib13';
// import { Childlib4Module as Childlib14Module } from '@largerepo/lib14';
// import { Childlib5Module as Childlib15Module } from '@largerepo/lib15';
// import { Childlib6Module as Childlib16Module } from '@largerepo/lib16';
// import { Childlib7Module as Childlib17Module } from '@largerepo/lib17';
// import { Childlib8Module as Childlib18Module } from '@largerepo/lib18';
// import { Childlib9Module as Childlib19Module } from '@largerepo/lib19';

import { AppComponent } from './app.component';
import { routes } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
