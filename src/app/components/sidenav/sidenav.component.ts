import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navItems = [
    {
      title: 'cutomers',
      icon: 'fa fa-users',
      link: '/customers'
    },
    {
      title: 'statistics',
      icon: 'fas fa-chart-bar',
      link: '/statistics'
    },
    {
      title: 'contact',
      icon: 'fas fa-envelope',
      link: '/contact'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
