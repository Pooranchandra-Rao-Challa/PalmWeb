import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NewPasswordComponent } from './newpassword/newpassword.component';
import { PrimengModule } from '../_shared/primeng.module';
import { RouterModule } from '@angular/router';
import { LockScreenComponent } from './lockscreen/lockscreen.component';
import { ErrorComponent } from './error/error.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { SecurityquestionsComponent } from './securityquestions/securityquestions.component';

@NgModule({
    declarations: [
        NewPasswordComponent,
        LockScreenComponent,
        ErrorComponent,
        AccessdeniedComponent,
        SecurityquestionsComponent
    ],
    imports: [CommonModule,RouterModule, AuthRoutingModule,PrimengModule]
})
export class AuthModule {}
