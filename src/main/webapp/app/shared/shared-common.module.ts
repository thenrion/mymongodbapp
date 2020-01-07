import { NgModule } from '@angular/core';

import { MymongodbappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MymongodbappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MymongodbappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MymongodbappSharedCommonModule {}
