import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdsComponent } from './components/ads/ads.component';
import { HomeComponent } from './components/home/home.component';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        NavbarComponent,
        AdsComponent,
        HomeComponent,
        RouterOutlet
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'anandasaisoorisetty' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('anandasaisoorisetty');
  });

  it('should initialize showMoveToTop based on scroll position', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Mock window.scrollY
    spyOn(window, 'scrollY' as any).and.returnValue(0); // Jasmine workaround for window properties
    app.ngOnInit();
    expect(app.showMoveToTop).toBeFalse();

    spyOn(window, 'scrollY' as any).and.returnValue(300);
    app.onScroll();
    expect(app.showMoveToTop).toBeTrue();
  });

  it('should scroll to top when scrollToTop is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    spyOn(window, 'scrollTo');
    app.scrollToTop();
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
