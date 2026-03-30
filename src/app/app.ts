import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  standalone: true, // This is modern Angular 21
  imports: [RouterOutlet, HeaderComponent, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService,
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
