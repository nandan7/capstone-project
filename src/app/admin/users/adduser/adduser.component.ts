import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../model/User';
import { HttpClientService } from '../../../service/http-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  message: string;
  password: string;

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addUser() {
    this.httpClientService.addUser(this.user).subscribe((user) => {
      this.router.navigate(['admin', 'users']);
      alert("Successfully registered, You will contacted by us soon");
    });
  }
}
