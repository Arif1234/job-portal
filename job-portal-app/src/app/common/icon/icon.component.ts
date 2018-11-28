import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() svgIcon: string;
  iconRegistry: MatIconRegistry;
  sanitizer: DomSanitizer;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.iconRegistry = iconRegistry;
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    // New SVG icons should be registered here and added in assets/svg/ folder.
    // this.registerIcon('close');
  }

  public registerIcon(icon): void {
    this.iconRegistry.addSvgIcon(icon, this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/' + icon + '.svg'));
  }
}
