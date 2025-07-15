import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent, SkillsComponent, PortfolioComponent, ContactUsComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
