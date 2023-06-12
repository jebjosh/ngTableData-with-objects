import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 6, 10, 25],
      processing: true,
    };
  }
  title = 'TableData';

  public dataa = [
    {
      name: 'Ajay',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: 'therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    { name: 'Jas', email: 'therichpost@gmail.com', website: 'therichpost.com' },
    {
      name: '8therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: '6therichpost',
      email: '4therichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: 'Jas',
      email: 'utherichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: 'r`therichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
    {
      name: 'etherichpost',
      email: 'therichpost@gmail.com',
      website: 'therichpost.com',
    },
  ];

  dtOptions: DataTables.Settings = {};
}
